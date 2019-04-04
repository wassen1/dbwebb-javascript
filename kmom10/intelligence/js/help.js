window.HelpFunctions = (function() {
    /**
     * Returns a random number
     * @param {Number} min the lowest integer in the range
     * @param {Number} max the largest ingeger in the range (not included)
     */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * Returns a string of Fizz Buzz numbers
     * @param {Number} start the starting number
     * @param {Number} stop the last number
     */
    function fizzBuzz(start, stop) {
        var theString = "";

        for (var i = start; i <= stop; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                theString += "Fizz Buzz" + ",";
            } else if (i % 5 === 0) {
                theString += "Buzz" + ",";
            } else if (i % 3 === 0) {
                theString += "Fizz" + ",";
            } else {
                theString += i  + ",";
            }
        }
        theString = theString.slice(0, -1);

        return theString;
    }

    /**
     * Test if the guess is same as correct
     * @param {*} guess the guess
     * @param {*} correct the correct answer
     */
    function testAnswer(guess, correct) {
        if (guess == correct) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Runs the progressbar
     * @param {Number} totalTime Total time of the progressbar in milliseconds
     */
    function progressBar(totalTime) {
        var width = 1;
        var el = document.getElementById("progressBar");
        var id = setInterval(steps, totalTime / 100);

        function steps() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                el.style.width = width + '%';
            }
        }
    }

    /**
     * Disables button
     * @param {Element} selector the button to disable
     */
    function disableButtons(selector) {
        var elements = document.getElementsByClassName(selector);

        Array.prototype.forEach.call(elements, function(el) {
            el.setAttribute("disabled", "disabled");
            //pointer-events: none
            //for css
        });
    }

    /**
     * Enables button after disable
     * @param {Element} selector the button to enable
     */
    function unDisableButton(selector) {
        selector.removeAttribute("disabled");
    }

    /**
     * Creates text node wrapped in p tags from an array with text
     * @param {Array} textArr the array of text
     * @param {Element} parent parent element
     */
    function textWithLinebrake(textArr, parent) {
        textArr.forEach(function(text) {
            var tmpTextNode = document.createTextNode(text);
            var pElement = document.createElement('p');

            pElement.appendChild(tmpTextNode);
            parent.appendChild(pElement);
            // parent.appendChild(lineBrake);
        });
    }

    /**
     * Makes a presentation div
     * @param {Array} textArr array of text elements
     */
    function makePresentation(textArr) {
        var presentationContainer = document.createElement('div');
        var presentation = document.createElement('div');

        presentationContainer.classList.add('presentationContainer');
        presentation.classList.add('presentation');
        textWithLinebrake(textArr, presentation);
        presentationContainer.appendChild(presentation);
        return presentationContainer;
    }

    /**
     * Makes question buttons in an array
     * @param {Array} answerArr array of answers
     */
    function makeQuestionButtons(answerArr) {
        return answerArr.map(function(answer, index) {
            var tmp = document.createElement('button');

            tmp.id = "answer" + index;
            tmp.classList.add('answer');
            tmp.innerHTML = answer;
            return tmp;
        });
    }

    /**
     * Shows whitch element is correct
     * @param {Number} guessIndex the quessed index
     * @param {Number} correctIndex the correct index
     */
    function showCorrect(guessIndex, correctIndex) {
        document.getElementById('answer' + guessIndex).classList.add('fail');
        document.getElementById('answer' + correctIndex).classList.add('correct');
    }

    /**
     * Clears all children from element
     * @param {Element} target the parent element
     */
    function clearAllElements(target) {
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }
    }

    return {
        clearAllElements: clearAllElements,
        getRandomInt: getRandomInt,
        fizzBuzz: fizzBuzz,
        testAnswer: testAnswer,
        disableButtons: disableButtons,
        textWithLinebrake: textWithLinebrake,
        makePresentation: makePresentation,
        unDisableButton: unDisableButton,
        makeQuestionButtons: makeQuestionButtons,
        showCorrect: showCorrect,
        progressBar: progressBar,
    };
})();
