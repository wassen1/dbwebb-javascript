window.Test3 = (function () {
    'use strict';
    var count;
    var score;
    var flagConfig;
    var config = {
        headline: 'Deltest 3',
        presentationColor: 'greenyellow',
        resultColor: 'rgb(47, 179, 255)',
        scorePerQuestion: 1,
        getMaxScore: function() {
            return config.scorePerQuestion * flagConfig.length;
        },
        presentationArray: function() {
            return ["Välkommen till tredje deltestet!", "\n", "Här skall du komma ihåg vilka flaggor som visats och sedan klicka på dem i den ordning som står i listan.", "Flaggorna visas i 5 sekunder.", "Rätt svar ger " + config.scorePerQuestion + " poäng och fel svar 0 poäng.", "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        },
        resultArray: function() {
            return ["Dina poäng: " + score, "Max möjliga poäng: " + config.getMaxScore(), "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        }
    };
    var getRandomInt = window.HelpFunctions.getRandomInt;
    var testAnswer = window.HelpFunctions.testAnswer;
    var progressBarFn = window.HelpFunctions.progressBar;
    var flagHtml = {
        belgium: `<div class="flag13-15 belgien">
                    <div class="part1"></div>
                    <div class="part2">
                </div></div>`,
        france: `<div class="flag2-3 france">
                    <div class="part1">
                    </div><div class="part2">
                </div></div>`,
        indonesia: `<div class="flag2-3 indonesia">
                        <div class="part1">
                        </div><div class="part2">
                    </div></div>`,
        sweden: `<div class="flag5-8 sweden">
                    <div class="part1"></div>
                    <div class="part2"></div>
                    <div class="part3"></div>
                    <div class="part4"></div>
                </div>`
    };

    var flag = {
        flagHtml: "",
        flagTarget: document.getElementsByClassName('squareContainer')[0],
        drawFlag: function (targ) {
            targ.innerHTML = this.flagHtml;
        },
        init: function (tmpHtml) {
            this.flagHtml = tmpHtml;
        }
    };

    flagConfig = [
        {
            html: flagHtml.sweden,
            land: 'Sverige',
            id: 0,
        },
        {
            html: flagHtml.belgium,
            land: 'Belgien',
            id: 1,
        },
        {
            html: flagHtml.france,
            land: 'Frankrike',
            id: 2,
        },
        {
            html: flagHtml.indonesia,
            land: 'Indonesien',
            id: 3,
        },
        {
            html: flagHtml.belgium,
            land: 'Belgien',
            id: 1,
        },
        {
            html: flagHtml.france,
            land: 'Frankrike',
            id: 2,
        },
        {
            html: flagHtml.sweden,
            land: 'Sverige',
            id: 0,
        },
        {
            html: flagHtml.indonesia,
            land: 'Indonesien',
            id: 3,
        },
        {
            html: flagHtml.sweden,
            land: 'Sverige',
            id: 0,
        },
    ];

    /**
     * Makes flag objects
     */
    function makeFlagObj() {
        var allObjects;
        var swedenFlag = Object.create(flag);
        var belgiumFlag = Object.create(flag);
        var franceFlag = Object.create(flag);
        var indonesiaFlag = Object.create(flag);

        swedenFlag.init(flagHtml.sweden);
        belgiumFlag.init(flagHtml.belgium);
        franceFlag.init(flagHtml.france);
        indonesiaFlag.init(flagHtml.indonesia);

        allObjects = [swedenFlag, belgiumFlag, franceFlag, indonesiaFlag, belgiumFlag, franceFlag, swedenFlag, indonesiaFlag, swedenFlag]; // eslint-disable-line max-len

        return allObjects;
    }

    /**
     * Here the test will be built
     * @param {Element} target
     */
    function makeTheTest(target) {
        var allObjects = makeFlagObj();
        var tableContainer;
        var tmpArr;
        var tmpParent;
        var tmp;
        var questionContainer;
        var randomInt;
        var randomEl;
        var listEl;
        var clickHandler;
        var progressBarContainer;
        var progressBar;

        //Make the progress bar
        progressBarContainer = document.createElement('div');
        progressBarContainer.id = 'progressBarContainer';
        progressBarContainer.style.height = 20 + 'px';
        progressBarContainer.style.width = 730 + 'px';
        progressBarContainer.style.backgroundColor = 'lightgrey';
        progressBar = document.createElement('div');
        progressBar.id = 'progressBar';
        progressBarContainer.appendChild(progressBar);
        target.appendChild(progressBarContainer);

        //Make the list
        tableContainer = document.createElement('div');
        tableContainer.classList.add('tablecontainer');
        tmpArr = flagConfig.map(function(obj) {
            return Object.assign({}, obj);
        });
        for (var iii=0; iii<flagConfig.length; iii++) {
            randomInt = getRandomInt(0, tmpArr.length);
            randomEl = tmpArr.splice(randomInt, 1)[0];
            listEl = document.createElement('button');

            listEl.innerHTML = randomEl.land;
            listEl.id = randomEl.id;
            listEl.classList.add('listEl');
            tableContainer.appendChild(listEl);
            target.appendChild(tableContainer);
        }

        //Make the flags
        questionContainer = document.createElement('div');
        questionContainer.classList.add('squareContainer');
        for (var i = 0; i < flagConfig.length; i++) {
            tmpParent = document.createElement('div');
            tmp = document.createElement('div');
            tmp.classList.add('square');
            tmp.id = flagConfig[i].id;
            tmpParent.classList.add('squareParent');
            tmpParent.appendChild(tmp);
            questionContainer.appendChild(tmpParent);
            allObjects[i].drawFlag(tmp);
        }
        target.appendChild(questionContainer);

        /**
         * Handles what will happen on click
         */
        clickHandler = function() {
            var tmp;
            var clonedTmp;
            var correctButtonId;
            var thatChild = this.childNodes[0];

            thatChild.classList.remove('hide');
            correctButtonId = tableContainer.childNodes[count].id;
            if (testAnswer(thatChild.id, correctButtonId)) {
                tableContainer.childNodes[count].classList.add('correct');
                score = setScore(score);
            } else {
                tableContainer.childNodes[count].classList.add('fail');

                //remove eventlisteners by cloning the element
                tmp = document.querySelector('.squareContainer');
                clonedTmp = tmp.cloneNode(true);
                tmp.parentNode.replaceChild(clonedTmp, tmp);

                window.setTimeout(function () {
                    window.HelpFunctions.clearAllElements(target);
                    window.Test.resultPresentation(3);
                }, 2000);
            }
            if (count >= flagConfig.length - 1) {
                window.setTimeout(function () {
                    window.HelpFunctions.clearAllElements(target);
                    window.Test.resultPresentation(3);
                }, 2000);
            }
            this.removeEventListener('click', clickHandler);
            count += 1;
        };

        progressBarFn(5000);
        window.setTimeout(function () {
            var squares = document.querySelectorAll('.square');

            for (var ii = 0; ii < squares.length; ii++) {
                squares[ii].classList.add('hide');
                squares[ii].parentNode.addEventListener('click', clickHandler);
            }
        }, 5000);
        document.getElementById('headline').innerHTML = config.headline;
    }

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
