/*Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

function lazyAdder(firstNum) {
  // Your code here
  return function(secondNum) {
    return function(thirdNum) {
      return firstNum + secondNum + thirdNum;
    }
  }
}

let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

/*how to turn this into a one-line arrow function:
declare the lazyAdder function in arrow function syntax. Use the => arrow to return the next
anonymous function, which would just be () with the secondNum arument passed in. Do the same to return
the 3rd anonymous function with thirdNum passed in. Then, have the 3rd function return using arrow syntax the sum
of all 3 arguments.*/
