window.Test1 = (function () {
    "use strict";
    var count;
    var score;
    var clickHandler;
    var makeQuestionButtons = window.HelpFunctions.makeQuestionButtons;
    var textWithLinebrake = window.HelpFunctions.textWithLinebrake;
    var testAnswer = window.HelpFunctions.testAnswer;
    var showCorrect = window.HelpFunctions.showCorrect;
    var disableButtons = window.HelpFunctions.disableButtons;
    var unDisableButton = window.HelpFunctions.unDisableButton;
    var questionObjects = [
        {
            question: ["Vad betyder Apologi?"],
            answers: ["jämförelse", "försvar", "läran om apor"],
            correctAnswer: "1"
        },
        {
            question: ["Vad betyder Fatigera?"],
            answers: ["utmatta", "be om pengar", "söndra"],
            correctAnswer: "0"
        },
        {
            question: ["Vad betyder Facil?"],
            answers: ["måttlig", "snäll", "fet"],
            correctAnswer: "0"
        }
    ];
    var config = {
        headline: 'Deltest 1',
        presentationColor: 'greenyellow',
        resultColor: 'rgb(47, 179, 255)',
        scorePerQuestion: 3,
        getMaxScore: function() {
            return config.scorePerQuestion * questionObjects.length;
        },
        presentationArray: function() {
            return ["Välkommen till första deltestet!", "\n", "Det består av ett antal 1 X 2 frågor", "rätt svar ger " + config.scorePerQuestion + " poäng och fel svar 0 poäng.", "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        },
        resultArray: function() {
            return ["Dina poäng: " + score, "Max möjliga poäng: " + config.getMaxScore(), "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        }
    };


    /**
     * Here the test will be built
     * @param {Element} target the parent element
     */
    function makeTheTest(target) {
        var question;
        var questionBox;
        var questionContainer;
        var nextTextCont;
        var nextButton;
        var nextContainer;
        var questionButtonArr;

        question = document.createElement('div');
        question.classList.add('question');
        textWithLinebrake(questionObjects[count].question, question);
        questionBox = document.createElement('div');
        questionBox.classList.add('questionBox');
        questionBox.appendChild(question);

        questionContainer = document.createElement('div');
        questionContainer.appendChild(questionBox);
        questionButtonArr = makeQuestionButtons(questionObjects[count].answers);
        questionButtonArr.forEach(function(item) {
            item.addEventListener('click', clickHandler);
            questionContainer.appendChild(item);
        });

        nextButton = document.createElement('button');
        nextButton.classList.add('next');
        nextButton.setAttribute("disabled", "disabled");
        nextButton.addEventListener('click', function() {
            if (count < questionObjects.length) {
                window.HelpFunctions.clearAllElements(target);
                makeTheTest(target);
            } else {
                window.HelpFunctions.clearAllElements(target);
                window.Test.resultPresentation(1);
            }
        });
        nextTextCont = document.createTextNode("Next");
        nextButton.appendChild(nextTextCont);
        nextContainer = document.createElement('div');
        nextContainer.classList.add('nextContainer');
        nextContainer.appendChild(nextButton);

        questionContainer.appendChild(nextContainer);
        questionContainer.classList.add('questionContainer');
        target.appendChild(questionContainer);
        document.getElementById('headline').innerHTML = config.headline;
    }

    /**
     * Handles what will happen on click
     */
    clickHandler = function() {
        var correctIndex = questionObjects[count].correctAnswer;
        var guessIndex = this.id.slice(6);

        if (testAnswer(guessIndex, correctIndex)) {
            score = setScore(score);
        }
        showCorrect(guessIndex, correctIndex);
        disableButtons('answer');
        unDisableButton(document.querySelector('.next'));
        count += 1;
    };

    /**
     * Returns the score of the test
     */
    function getScore() {
        return score;
    }

    /**
     * Sets the score
     * @param {Number} points the scores
     */
    function setScore(points) {
        return points + config.scorePerQuestion;
    }

    /**
     * Starts this module
     * @param {Element} target the parent
     */
    function init(target) {
        score = 0;
        count = 0;
        makeTheTest(target);
    }

    return {
        init: init,
        config: config,
        presentationArray: config.presentationArray,
        resultpresentationArray: config.resultArray,
        getScore: getScore,
    };
})();
