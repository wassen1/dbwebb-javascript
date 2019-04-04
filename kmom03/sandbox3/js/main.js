(function () {
    'use strict';

    var button = document.querySelector('button');

    button.addEventListener('click', eventHandlerButton, false);

    function eventHandlerButton() {
        var dices = getElementVal('#dices');
        var diceSides = getElementVal('#dicessides');
        var sumEl = document.querySelector('#sum');
        var averageEl = document.querySelector('#average');
        var diceSum = rollDice(dices, diceSides);
        var averageNr = averageDice(diceSum, dices);

        console.log("AVERAGE", averageNr.toFixed(20));
        printResult(sumEl, "Summan är: ", diceSum);
        printResult(averageEl, "Genomsnittet: ", (averageNr.toFixed(4)));
    }

    function getElementVal(element) {
        return document.querySelector(element).value;
    }

    function random(max) {
        return Math.floor(Math.random() * (((+max) + 1) - 1)) + 1;
    }

    function rollDice(times, maxInterval) {
        var randomly = 0;
        var diceSum = 0;

        for (var i = 1; i <= times; i++) {
            randomly = random(maxInterval);
            diceSum += randomly;
            console.log("Tärningskast: ", randomly);
        }
        return diceSum;
    }

    function averageDice(sum, n) {
        return Math.round((sum / n * 10000)) / 10000;
    }

    function printResult(element, text, number) {
        element.textContent = text + number;
    }


    // var myDate = new Date();

    // myContent.innerHTML = "<h2>Datum och tid är: <br>" + myDate;

    window.console.log('Sandbox is ready!');
})();
