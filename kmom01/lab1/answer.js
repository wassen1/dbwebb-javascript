/**
 * @preserve fa85b98179d6f28684656071725f9565
 *
 * fa85b98179d6f28684656071725f9565
 * javascript1
 * lab1
 * v2
 * fraa18
 * 2018-11-06 19:43:50
 * v3.1.3 (2018-09-13)
 *
 * Generated 2018-11-06 20:43:50 by dbwebb lab-utility v3.1.3 (2018-09-13).
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
 * Lab 1 - variables and builtins
 *
 * The foundation of variables, numbers, strings and basic arithmetic and
 * built in functions.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Variables, numbers and built-in functions
 *
 * Use variables, numbers and built-in functions.
 *
 * One way to round a float to a certain amount of decimals is:
 *
 * Math.round(val*10000)/10000
 *
 * Where `val` is your float number.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create two variables, `floatOne` and `floatTwo`.
 *
 * Give them the values `103.31` and `710.44`.
 *
 * Create a variable called `result` and assign to it the sum of the variables
 * above.
 *
 * Answer with the result, rounded to two decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var floatOne = 103.31;
var floatTwo = 710.44;
var result = floatOne + floatTwo;

// console.log("result: ", result);


ANSWER = Math.round(result*100)/100;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a variable `someIntText` and give it a string value of `"782.48
 * crocodile"`.
 *
 * Use the function `parseInt()` to find out the integer representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var someIntText = "782.48 crocodile";
// console.log(parseInt(someIntText));





ANSWER = parseInt(someIntText);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use your variable `someIntText`.
 *
 * Use the function `parseFloat()` to find out the float representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = parseFloat(someIntText);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Use the method `max()`, in Math, to find out the highest number in the
 * serie:
 *
 * 532,777,669,843
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = Math.max(532, 777, 669, 843);


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Use the Math property `PI` to get the float value of 'Pi'. Round the result
 * to 4 decimals.
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.round(Math.PI * 10000) / 10000;


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Strings and built-in functions
 *
 * Work with strings and find out about the built-in functions.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a variable called `wordOne` and assign the word "horse" to it.
 *
 * Add (concatenate) the number `870` to the word and answer with the
 * resulting variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var wordOne = "horse";

wordOne += 870;

ANSWER = wordOne;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Use the built-in method `charAt()` on the word "crocodile" to return the
 * character at a given index.
 *
 * Answer with the character at index 1.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = "crocodile".charAt(1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Use the built-in method `toUpperCase()` to transform the string:
 *
 * `"I think most Scottish cuisine is based on a dare."` to uppercase.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "I think most Scottish cuisine is based on a dare.".toUpperCase();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4 (1 points)
 *
 * Use the built-int property `length` to find out the length of the string:
 * `"crocodile"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = "crocodile".length;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5 (1 points)
 *
 * Use the built-int method `substr()` to extract the last three characters of
 * the word: `"crocodile"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = "crocodile".substr(-3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Extra assignments
 *
 * Solve these optional questions to earn extra points.
 *
 */



/**
 * Exercise 3.1 (3 points)
 *
 * Create a Date object called `myDate` and initiate it with: `"Aug 7, 1970"`.
 *
 * Use the built-in function `Date.getFullYear()` to get the year from your
 * Date object.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var myDate = new Date("Aug 7, 1970");


ANSWER = myDate.getFullYear();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (3 points)
 *
 * Create a new Date object that is equal to `myDate` plus `18` days.
 *
 * Use `Date.getDate()` and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var newDate = new Date(myDate.setDate(myDate.getDate() + 18));
// newDate.setDate(newDate.getDate() + 18);

// console.log("newDate: ", newDate);
// console.log("newDate: ", newDate.getDate());

ANSWER = newDate.getDate();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, true);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
