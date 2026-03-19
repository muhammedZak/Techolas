// Even number
// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even number: ${i}`);
//   }
// }

// Sum of 10 natural Numbers
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log(`Sum : ${sum}`);

// Multiplication table of 5
// for (let i = 1; i <= 10; i++) {
//   const num = 5;
//   let result = i * num;
//   console.log(`${i} x ${num} = ${result}`);
// }

// Reverse order
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 20) {
//     if(i % 2 === 0){
//         console.log(i)
//     }
//   i++;
// }

// const arr = [10, 5, 8, 20, 3];

// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) min = arr[i];
//   if (max < arr[i]) max = arr[i];
// }

// console.log('Min :' + min);
// console.log('Max :' + max);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log('Sum :' + sum);

// const arr = [10, 5, 8, 20, 3];

// const even = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) even[even.length] = arr[i];
// }
// console.log(even);

// const arr = [10, 5, 8, 20, 3, 20];
// const num = 5;
// const index = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     index.push(i);
//   }
// }

// console.log(index);

// const index = arr.indexOf(num);

// const index = arr.findIndex((ele) => ele === num);
// console.log(index);


const arr = [10, 5, 8, 20, 3, 20];

const reversedArr = arr.reverse()
console.log(reversedArr)