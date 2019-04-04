/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function () {
    "use strict";
    var words = ["flygskam", "bokashi", "cyberhygien", "digifysisk", "flossa", "intryckssanera", "nätläkare", "självoptimering", "spårpixel", "stöddjur", "välfärdsbrott", "swishjournalist", "mikrootrohet", "fonologi", "umbärlig", "haiku", "fontanell", "okvädingsord"]; // eslint-disable-line max-len
    var activeWord = "";
    var activeWordArr = [];
    var guessedArr = [];
    var points = {
        numberOfParts: 0,
        numberOfLetters: 0
    };

    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],

        wordlist: function() {
            return words;
        },

        peek: function() {
            return activeWord;
        },

        testGuess: function(guess) {
            var tmpArr = guessedArr.slice();
            var rightGuess = false;

            for (var i=0; i<activeWordArr.length; i++) {
                if (activeWordArr[i] == guess) {
                    tmpArr[i] = guess;
                    rightGuess = true;
                    decresePoints('numberOfLetters');
                }
            }
            guessedArr = tmpArr.slice();
            if (!rightGuess) {
                decresePoints('numberOfParts');
            }
            return rightGuess;
        },

        getGuessedArr: function() {
            return guessedArr;
        },

        checkStatus: function() {
            return {
                parts: points.numberOfParts > 0,
                letters: points.numberOfLetters > 0
            };
        },


        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                window.console.log("The part is not valid: " + part);
                return false;
            }
            window.console.log("The part is valid: " + part);
            return true;
        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                window.console.log("Hiding part: " + part);
                this.partAsElement[part].style.display = "none";
            }
        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {
            if (this.isValid(part)) {
                window.console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        },

        init: function() {
            setRandomWord();
            setGuessedArr();
            setPoints();
        }
    };

    /**
    * Gets a random integer
    * @param {Number} min start of range including this number
    * @param {Number} max end of range exluding this number
    * @returns random integer in a range
    */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function setRandomWord() {
        activeWord = words[getRandomInt(0, words.length)];
        activeWordArr = activeWord.split("").map(function(item) {
            return item.toUpperCase();
        });
    }

    function setGuessedArr() {
        guessedArr = activeWordArr.map(function() {
            return "-";
        });
    }

    function setPoints() {
        points.numberOfLetters = activeWord.length;
        points.numberOfParts = hangman.validParts.length;
    }

    function decresePoints(x) {
        points[x] = points[x] - 1;
    }

    // Return the object to make it visible.
    return hangman;
})();
