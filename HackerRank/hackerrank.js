/* Exercise 1
Name: Hello World.

Task
A greeting function is provided for you in the editor below. 
It has one parameter, 'parameterVariable'. Perform the following tasks to complete this challenge:

Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. 
The code for this portion of the task is already provided in the editor.
Use console.log() to print the contents of 'parameterVariable'. (i.e., the argument passed to main).
You've got this!
 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  console.log("Hello, World!");

  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log(parameterVariable);
}

function main() {
  const parameterVariable = readLine();

  greeting(parameterVariable);
}

/* Exercise 2 
Name: Data Types*/

/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  console.log(firstInteger + parseInt(secondInteger));

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  console.log(firstDecimal + parseFloat(secondDecimal));

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  console.log(firstString.concat(secondString));
}

function main() {
  const secondInteger = readLine();
  const secondDecimal = readLine();
  const secondString = readLine();

  performOperation(secondInteger, secondDecimal, secondString);
}

/*Exercise 3
Name: Arithmetic Operators*/

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width);
  return perimeter;
}

function main() {
  const length = +readLine();
  const width = +readLine();

  console.log(getArea(length, width));
  console.log(getPerimeter(length, width));
}
