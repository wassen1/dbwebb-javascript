/**
 * @preserve 709dab2cf60eb270fe92e2bab887ea8c
 *
 * 709dab2cf60eb270fe92e2bab887ea8c
 * javascript1
 * lab2
 * v2
 * fraa18
 * 2018-11-14 17:07:53
 * v3.1.3 (2018-09-13)
 *
 * Generated 2018-11-14 18:07:54 by dbwebb lab-utility v3.1.3 (2018-09-13).
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
 * Lab 2 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `5, 8, 9, 11, 11` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var card1 = 5;
var card2 = 8;
var card3 = 9;
var card4 = 11;
var card5 = 11;

var result = card1 + card2 + card3 + card4 + card5;


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var status;

if (result > 21) {
    status = "busted";
} else {
    status = "safe";
}


ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var combined = card1 + card2 + card3;

if (combined < 21) {
    status =  "safe";
} else if (combined == 21) {
    status = "black jack";
} else {
    status = "busted";
}




ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `8, 7, 5` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var answer;
var dealer1, dealer2, dealer3;

dealer1 = 8;
dealer2 = 7;
dealer3 = 5;

var sum = dealer1 + dealer2 + dealer3;

if (sum < 17) {
    answer = "pick";
} else if (sum >= 17 && sum < 21) {
    answer = "stop";
} else if (sum == 21) {
    answer = "black jack";
} else if (sum > 21) {
    answer = "busted";
}

ANSWER = answer;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "kiwi"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit;

myFruit = "kiwi";
switch (myFruit) {
    case "banana":
        result = "The banana is yellow.";
        break;

    case "apple":
        result = "The apple is green.";
        break;

    case "kiwi":
        result = "The kiwi is green.";
        break;

    case "plum":
        result = "The plum is purple.";
        break;

    default:
        result = "";
}


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


myFruit = "pear";

switch (myFruit) {
    case "banana":
        result = "The banana is yellow.";
        break;

    case "apple":
        result = "The apple is green.";
        break;

    case "kiwi":
        result = "The kiwi is green.";
        break;

    case "plum":
        result = "The plum is purple.";
        break;

    default:
        result = "That is an unknown fruit.";
}




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `758` with the value `3`, `16` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = 758;
for (var i = 0; i < 16; i++) {
    result += 3;
}



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `804` with the value `6`, `20` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 804;
for (i = 0; i < 20; i++) {
    result -= 6;
}




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the odd values in the range `22` to `47` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = "23";
for (i = 24; i <= 47; i++) {
    if (i % 2 != 0) {
        result += "," + i;
    }
}






ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `16` with the value `3` until it has
 * reached or passed `758`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = 16;
count = 0;

while (result < 758) {
    result += 3;
    count++;
}




ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `6` from `804` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = 804;
var count = 0;

while (result > 0) {
    result -= 6;
    count++;
}




ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, true);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `22` to `62`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
count = 26;
var theString = "25";

 while (count <= 62) {
     if (count % 5 == 0 || count % 7 == 0) {
        theString += "," + count;
     }
     count++;
 }

ANSWER = theString;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, true);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
