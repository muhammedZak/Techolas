// function greet(name) {
//   console.log('Hello ' + name);
// }

// greet('Zakariya');

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(10, 30);

function square(a = 1) {
  console.log(a * 2);
}

// square(10);
// square();

// console.log(add(10, 10));
// function add(a = 1, b = 2) {
//   return a + b;
// }

// console.log(add(10, 20));
var a = 10;

// const greet = function () {
//   console.log('Hi');
// };

// greet();
// console.log(greet)
// console.log(add)

// const lang = function (language) {
//   return language;
// };

// const fun = lang('JavaScript');
// console.log(fun)

// const checkEvenOdd = function (num) {
//   if (num % 2 === 0) {
//     return 'Even';
//   }
//   return 'Odd';
// };

// const fun = checkEvenOdd(3);
// console.log(fun);
// const funq = checkEvenOdd(12);
// console.log(funq);
// console.log(checkEvenOdd)

// const add = () => 10 + 20;
// console.log(add());

// const greet = (name, age) => 'Hello ' + name;
// console.log(greet('Appu'));

// (() => console.log('Hello World!'))();

// function mainFunction(callback) {
//   console.log('Task started');
//   callback();
// }

// function greet() {
//   console.log('Task Finished');
// }

// mainFunction(greet);

// let text = 'zakariya';
// const myArray = text.split(',');
// console.log(myArray);

// let char = text.charAt(0);
// console.log(char) Output: z

// let text = 'HELLO WORLD';
// let char = text.charCodeAt(0);
// console.log(char);

// console.log('First');

// setTimeout(() => {
//   console.log('5 seconds later');
// }, 5000);

// console.log('Third');

// setInterval(() => {
//   console.log('Set Intervel');
// }, 2000);

// let count = 0;
// const timer = setInterval(() => {
//   count++;
//   console.log('Count ' + count);

//   if (count === 5) {
//     clearInterval(timer);
//     console.log('Stopped');
//   }
// }, 1000);

// console.log(timer);

function step1(callback) {
  console.log('Step 1 completed');
  callback();
}
function step2(callback) {
  console.log('Step 2 completed');
  callback();
}
function step3(callback) {
  console.log('Step 3 completed');
  callback();
}
function step4() {
  console.log('Step 4 completed');
}
// callback Hell  too many nested callbacks
step1(() => {
  step2(() => {
    step3(() => {
      step4();
    });
  });
});