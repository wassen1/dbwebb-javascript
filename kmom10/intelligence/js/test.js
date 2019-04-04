window.Test = (function() {
    "use strict";

    var scores = [0, 0, 0, 0, 0, 0];
    var part = 0;
    var target;
    var makePresentation = window.HelpFunctions.makePresentation;
    var clearAllElements = window.HelpFunctions.clearAllElements;
    var config = {
        headline: 'Intelligenstest',
        presentationColor: 'red',
        resultColor: 'rgb(47, 179, 255)',
        paths: function(id) {
            var arr = [window.Test, window.Test1, window.Test2, window.Test3, window.Test4, window.Test5]; // eslint-disable-line max-len

            return  arr[id];
        },
        getMaxScore: function() {
            var maxTotal = 0;

            for (var i = 1; i < scores.length; i++) {
                maxTotal = maxTotal + config.paths(i).config.getMaxScore();
            }
            return maxTotal;
        },

        presentationArray: function() {
            return ["Välkommen till detta intelligenstest!", "Det består av 5 delar", "\n", "Klicka för att fortsätta..."]; // eslint-disable-line max-len
        },
        resultArray: function() {
            return ["Du har avslutat testet. Din intelligens: " + config.getIntelligens(), "Max möjlig intelligens: " + 100, "\n", "Klicka för att börja om..."]; // eslint-disable-line max-len
        },
        getIntelligens: function() {
            var resultQuote =  getScore() / config.getMaxScore();

            console.log('IQ', resultQuote);
            if (resultQuote > 0.8) {
                return 100;
            } else if (resultQuote <= 0.8 && resultQuote > 0.6) {
                return 80;
            } else if (resultQuote <= 0.6 && resultQuote > 0.4) {
                return 60;
            } else if (resultQuote <= 0.4 && resultQuote > 0.2) {
                return 40;
            } else if (resultQuote <= 0.2 && resultQuote > 0) {
                return 20;
            } else { return 0; }
        }
    };


    /**
     * Starts the next test
     * @param {Number} id the last testId
     */
    function runTests(id) {
        id += 1;
        part = id;
        clearAllElements(target);
        startPresentation(id);
    }

    /**
     * Makes a start presentation
     * @param {Number} id part id of the current test
     */
    function startPresentation(id) {
        var presentation = makePresentation(config.paths(id).presentationArray());

        document.getElementById('headline').innerHTML = config.paths(id).config.headline;
        presentation.addEventListener('click', function () {
            clearAllElements(target);
            config.paths(id).init(target);
        });
        presentation.style.backgroundColor = config.paths(id).config.presentationColor;
        target.appendChild(presentation);
    }

    /**
     * Makes a result presentation
     * @param {Number} id part id of the current test
     */
    function resultPresentation(id) {
        var endPresentation;
        var presentation;

        if (config.paths(id + 1)) {
            presentation = makePresentation(config.paths(id).resultpresentationArray());
            presentation.addEventListener('click', function() {
                clearAllElements(target);
                updateScore(id);
                console.log('Scores', scores);
                runTests(id);
                console.log('TotalScore', getScore());
            });
            presentation.style.backgroundColor = config.paths(id).config.resultColor;
            target.appendChild(presentation);
        } else {
            updateScore(id);
            id = 0;
            document.getElementById('headline').innerHTML = config.paths(id).config.headline;
            console.log('Scores', scores);
            endPresentation = makePresentation(config.paths(id).resultpresentationArray());

            console.log('TotalScore', getScore());
            endPresentation.addEventListener('click', function() {
                scores = clearAllArr(scores);
                clearAllElements(target);
                runTests(id);
            });
            endPresentation.style.backgroundColor = config.paths(id).config.resultColor;
            target.appendChild(endPresentation);
        }
    }

    /**
     * Returns the score of the tests
     */
    function getScore() {
        return scores.reduce(function(acc, cur) {
            return acc + cur;
        }, 0);
    }

    /**
     * Updates an array with all scores from the part tests
     * @param {Number} id part id of the current test
     */
    function updateScore(id) {
        var score = config.paths(id).getScore();

        setScore(id, score);
    }

    /**
     * Sets the score
     * @param {Number} points the scores
     */
    function setScore(id, score) {
        scores[id] = score;
    }

    /**
     * Resets current part test
     */
    function reset() {
        scores[part] = 0;
        part = part - 1;
        runTests(part);
    }

    /**
     * Resets all elements in array to 0;
     * @param {Array} arr the array to be cleared
     * @returns an new array
     */
    function clearAllArr(arr) {
        return arr.map(function (el) {
            el = 0;
            return el;
        });
    }

    /**
     * Starts this module
     * @param {Element} target the parent
     */
    function init(selector) {
        if (!target) {
            document.getElementById('headline').innerHTML = config.headline;
            target = document.getElementById(selector);
            runTests(-1);
            // runTests(3);
        } else {
            runTests(0);
        }
    }


    return {
        init: init,
        config: config,
        resultPresentation: resultPresentation,
        presentationArray: config.presentationArray,
        resultpresentationArray: config.resultArray,
        reset: reset,
        getScore: getScore,

    };
})();
