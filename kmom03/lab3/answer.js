/**
 * @preserve 75efafdd8de8e167ba07933bf27443e8
 *
 * 75efafdd8de8e167ba07933bf27443e8
 * javascript1
 * lab3
 * v2
 * fraa18
 * 2018-11-21 11:44:02
 * v3.1.3 (2018-09-13)
 *
 * Generated 2018-11-21 12:44:02 by dbwebb lab-utility v3.1.3 (2018-09-13).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 3 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `44 and 91`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumRangeNumbers(startNumber, endNumber) {
    var sumNumbers = 0;

    for (var i = startNumber; i <= endNumber; i++) {
        sumNumbers += i;
    }
    return sumNumbers;
}


ANSWER = sumRangeNumbers(44, 91);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `banana` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function fruitColor(fruit) {
    var color;

    switch (fruit) {
        case 'banana':
            color = "yellow";
            break;
        case 'apple':
            color = "green";
            break;
        case 'kiwi':
            color = "green";
            break;
        case 'plum':
            color = "red";
            break;
        default:
            console.log("no fruit in range");
    }
    return color;
}

ANSWER = fruitColor("banana");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `24 and 42`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRange(rangeStart, rangeStop) {
    var theString = String(rangeStart);

    for (var i = rangeStart + 1; i <= rangeStop; i++) {
        theString += "," + i;
    }
    return theString;
}


ANSWER = printRange(24, 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `42 and 24`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printRangeReversed(rangeStart, rangeStop) {
    var theReverseString = rangeStart;

    for (var i = rangeStart - 1; i >= rangeStop; i--) {
        theReverseString += "," + i;
    }

    return theReverseString;
}

ANSWER = printRangeReversed(42, 24);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `24 and 42` (both ways).
 *
 * Answer with the result using arguments 24 and 42.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printAnyRange(rangeStart, rangeStop) {
    if (rangeStart < rangeStop) {
       return printRange(rangeStart, rangeStop);
    } else if (rangeStart > rangeStop) {
       return printRangeReversed(rangeStart, rangeStop);
    }
}

ANSWER = printAnyRange(24, 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `white` and `14`. The number represents the number of times the
 * string should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringRepeat(str, num) {
    var theString = str.repeat(num);

    return theString;
}


ANSWER = stringRepeat("white", 14);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, true);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `179 - 541` and the value `274`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function inRange(rangeStart, rangeStop, value) {
    if (value > rangeStart && value < rangeStop) {
        return true;
    } else {
        return false;
    }
}

ANSWER = inRange(179, 541, 274);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `179 - 541` and the value
 * `655`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = inRange(179, 541, 655);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `317` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function degreesToRadians(degree) {
    return Math.round(degree * Math.PI/180 * 10000)/10000;
}

ANSWER = degreesToRadians(317);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=4 and stop=21`.
 *
 * Write your code below and put the answer into the variable ANSWER.
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

ANSWER = fizzBuzz(4, 21);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `11, 8 and 9`.
 * The dealers hand should be three card with the values: `8, 9, 3`.
 * The function should return the sum and the player: `Player: 28, Dealer:
 * 20`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printSum(sumPlayer, sumDealer) {
    var sumP = sumPlayer.reduce(function(acc, val) {
        return acc + val;
    });
    var sumD = sumDealer.reduce(function(acc, val) {
        return acc + val;
    });

    return "Player: " + sumP + ", " + "Dealer: " + sumD;
}

ANSWER = printSum([11, 8, 9], [8, 9, 3]);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `11, 8 and 9`. The
 * dealers hand should be three card with the values: `8, 9, 3`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var phand = [11, 8, 9];
var dhand = [8, 9, 3];

function printResult(phand, dhand) {
    var pAnswer = "";
    var dAnswer = "";

    var sumP = phand.reduce(function(acc, val) {
        return acc + val;
    });
    var sumD = dhand.reduce(function(acc, val) {
        return acc + val;
    });

    if (sumP < 21) {
        pAnswer = "safe";
    } else if (sumP == 21) {
        pAnswer = "black jack";
    } else if (sumP > 21) {
        pAnswer = "busted";
    }

    if (sumD < 17) {
        dAnswer = "safe";
    } else if (sumD >= 17 && sumD < 21) {
        dAnswer = "stop";
    } else if (sumD == 21) {
        dAnswer = "black jack";
    } else if (sumD > 21) {
        dAnswer = "busted";
    }
    return "Player: " + pAnswer + ", " + "Dealer: " + dAnswer;
}

ANSWER = printResult(phand, dhand);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `629, 26 and 4`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function calculateInterest(startMoney, period, rate) {
    return Math.round(startMoney * Math.pow((1 + (rate / 100)), period) * 10000) / 10000;
}


ANSWER = calculateInterest(629, 26, 4);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, true);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
