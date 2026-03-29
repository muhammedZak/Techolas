/* Q1. Print numbers from 1 to 3, three times each using nested loops.
Example: Output: 1 1, 1 2, 1 3, 2 1 .. */
// for (let i = 1; i <= 3; i++) {
//   let row = '';
//   for (let j = 1; j <= 3; j++) {
//     row = row + `${i} ${j}, `;
//   }
//   console.log(row);
// }
/*
Output: 1 1, 1 2, 1 3, 
        2 1, 2 2, 2 3, 
        3 1, 3 2, 3 3,
*/

/*
Q2. Print a 3 x 3 square of stars.
Example: Example: *** on each of 3 lines.
*/
// for (let i = 1; i <= 3; i++) {
//   let row = '';
//   for (let j = 1; j <= 3; j++) {
//     row = row + '*';
//   }
//   console.log(row);
// }

/* 
Output:
        ***
        ***
        *** 
*/

/* 
Q3. Write a loop that prints multiplication pairs from 1 to 2 and 1 to 4.
Example: 1x1, 1x2, 1x3...
*/

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 4; j++) {
//     console.log(`${i}x${j}`);
//   }
// }
/* 
Output:
1x1
1x2
1x3
1x4
2x1
2x2
2x3
2x4
*/

// ARROW FUNCTION

/*
Q1. Create an arrow function that returns the square of a number.
Example: square(4) -> 16
*/
// const num = 4;
// const square = (num) => num * num;
// console.log(`Square of ${num} is : ${square(num)}`);
/*
Output: Square of 4 is : 16
*/

/*
Q2. Write an arrow function that checks whether a number is even.
Example: isEven(6) -> true
*/
// const num = 5;
// const findEven = (num) => num % 2 === 0;
// const isEven = findEven(num);
// console.log(`Number ${num} is ${isEven === false ? 'not ' : ''}even`);

/*
Q3. Make an arrow function that joins first name and last name.
Example: joinName('A', 'B') -> 'A B'
*/

// const joinName = (fName, lName) => fName + ' ' + lName;
// console.log(joinName('Hello', 'World'));

// 3) Anonymous Functions
/*
Q1. Store an anonymous function in a variable and print your name.
Example: console.log('Jithin');
*/

// const printName = function () {
//   console.log('Name');
// };
// printName();

/*
Q2. Use an anonymous function inside setTimeout to print a message after 2 seconds.
Example: Message appears later.
*/

// setTimeout(function () {
//   console.log('Prints after a small delay...');
// }, 2000);

/*
Q2. Use an anonymous function inside setTimeout to print a message after 2 seconds.
Example: Message appears later.
*/

/* Q1. Write an IIFE that prints 'Welcome to JavaScript'. */

// (function () {
//   console.log('Welcome to JavaScript');
// })();

/* 
Q2. Create an IIFE that stores a secret number and prints it.
Example: secret = 42
*/
/* 
(function () {
  const secret = 40;
  console.log(secret);
})(); */

/* 
Q1. Create a function that takes a number and a callback, then passes the doubled value to the callback.
Example: double(5) -> 10
*/

/* 
function myFunc(num, cb) {
  cb(num * 2);
}

function double(val) {
  console.log(val);
}

myFunc(5, double); */

/* 
Q2. Write a function that prints 'Task done' after a custom callback runs.
Example: First callback, then message.
*/

/* 
function runTask(callback) {
  callback(); 
  console.log('Task done');
}

runTask(() => {
  console.log('Callback executed');
}); */

/* 
Q3. Pass an anonymous function as a callback to print a success message.
Example: Success!
*/

/* 
function executeTask(callback) {
  callback();
}

executeTask(function () {
  console.log("Success!");
});
*/

/* 
Q1. Use an arrow function inside a loop to print 1 to 5.
Example: Print numbers using a helper function.
*/

/* 
const printNumber = (num) => {
  console.log(num);
};

for (let i = 1; i <= 5; i++) {
  printNumber(i);
}
*/

/* 
Q2. Write a nested loop that prints a 4-row triangle of stars.
Example: * / ** / *** / ****
*/

/* 
for (let i = 1; i <= 4; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}
*/

/* 
Q1. Explain why deeply nested callbacks are difficult to read.
Example: Too many levels and hard to debug.
*/

// Deeply nested callbacks create “callback hell,” making code hard to read, debug, and maintain due to excessive indentation and unclear execution flow.
