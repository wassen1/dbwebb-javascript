window.Test2 = (function() {
    'use strict';
    var count;
    var score;
    var clickHandler;
    var questionObjects = [];
    var getRandomInt = window.HelpFunctions.getRandomInt;
    var fizzBuzz = window.HelpFunctions.fizzBuzz;
    var makeQuestionButtons = window.HelpFunctions.makeQuestionButtons;
    var textWithLinebrake = window.HelpFunctions.textWithLinebrake;
    var testAnswer = window.HelpFunctions.testAnswer;
    var showCorrect = window.HelpFunctions.showCorrect;
    var disableButtons = window.HelpFunctions.disableButtons;
    var unDisableButton = window.HelpFunctions.unDisableButton;
    var config = {
        headline: 'Deltest 2',
        presentationColor: 'greenyellow',
        resultColor: 'rgb(47, 179, 255)',
        scorePerQuestion: 3,
        getMaxScore: function() {
            return config.scorePerQuestion * questionObjects.length;
        },
        presentationArray: function() {
            return ["Välkommen till andra deltestet!", "\n", "Här skall du lista ut hur serien fortsätter.", "Fizz Buzz är en divitionslek där Fizz är tal delbart med 3, Buzz är tal delbart med 5, och Fizz Buzz är tal delbart med både 3 och 5.", "Rätt svar ger 3 poäng och fel svar 0 poäng.", "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        },
        resultArray: function() {
            return ["Dina poäng: " + score, "Max möjliga poäng: " + config.getMaxScore(), "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        }
    };

    /**
     * Populates an array with objects
     * @param {Array} objArr
     */
    function populateObj(objArr) {
        var tmpObj = {};
        var rand = getRandomInt(1000, 2000);
        var str = fizzBuzz(rand, rand + 5);
        var arr = str.split(',');
        var correct = arr.pop();

        tmpObj.questionStr = arr.join(', ');
        tmpObj.question = ["Hur fortsätter serien:", tmpObj.questionStr + ", ?"];
        tmpObj.answers = ["Fizz", "Buzz", "Fizz Buzz", String(rand + 5)];
        tmpObj.correctAnswer = tmpObj.answers.indexOf(correct);
        objArr.push(tmpObj);
    }

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
                window.Test.resultPresentation(2);
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
        questionObjects = [];
        populateObj(questionObjects);
        populateObj(questionObjects);
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
