(function () {
    'use strict';
    var hangman = window.Hangman;
    var letterArea = document.getElementsByClassName("letterArea")[0];
    var resultArea = document.getElementsByClassName("resultArea")[0];
    var messageArea = document.getElementsByClassName("messageArea")[0];
    var alphabet = "abcdefghijklmnopqrstuvwxyzåäö".split("").map(function(item) {
        return item.toUpperCase();
    });
    var guessArr = [];
    var validParts = hangman.validParts.slice();

    function printMessage(resultArr) {
        var guessStr = "(" + guessArr.join("") + ")";
        var resultStr = resultArr.join("");

        resultArea.innerHTML = resultStr + "  " + guessStr;
        if (!hangman.checkStatus().letters) {
            messageArea.classList.add('success');
            messageArea.innerHTML = "You saved Hangmans life!";
            endGame();
        } else if (!hangman.checkStatus().parts) {
            messageArea.classList.add('fail');
            messageArea.innerHTML = "Sorry, you didnt manage to save Mr Hangmans life...";
            endGame();
        }
    }

    function handleGuess(guess) {
        var guessIsRight = hangman.testGuess(guess);
        var guessedLetters = hangman.getGuessedArr();

        guessArr.push(guess);
        if (guessIsRight) {
            printMessage(guessedLetters);
        } else {
            hangman.show(validParts[0]);
            validParts.shift();
            printMessage(guessedLetters);
        }
    }

    for (var i = 0; i < hangman.validParts.length; i++) {
        hangman.hide(hangman.validParts[i]);
    }

    alphabet.forEach(function(__, index) {
        var tmp = document.createElement("button");

        tmp.className = "letter";
        tmp.innerHTML = alphabet[index];
        tmp.addEventListener('click', function(event) {
            event.target.setAttribute("disabled", "disabled");
            handleGuess(tmp.innerHTML);
        });
        letterArea.appendChild(tmp);
    });

    function endGame() {
        var tmps = document.getElementsByClassName('letter');

        for (var i = 0; i < tmps.length; i++) {
            tmps[i].setAttribute("disabled", "disabled");
            // tmps[i].classList.add('endgame');
        }
    }

    hangman.init();
    printMessage(hangman.getGuessedArr());
})();
