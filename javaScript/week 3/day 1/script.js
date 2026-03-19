// let i = 6;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// For of loop

// const arr = ['Apple', 'Banana', 'Mango'];

// const arr = "My name is zakariya"

// for (const fruit of arr) {
//   console.log(fruit);
// }

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for (const value of numbers) {
//   sum += value;
// }
// console.log(sum);

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(`Sum : ${sum}`);

// const arr = [5, 30, 20, 5, 70, 4];

// let smallestNum = arr[0];
// for (const num of arr) {
//   if (smallestNum > num) {
//     smallestNum = num;
//   }
// }

// console.log(smallestNum);

// const arr = ['Apple', 'Banana', 'Mango'];

// for (const index in arr) {
//   console.log(arr[index]);
// }

// const obj = {
//   name: 'Zak',
//   age: 31,
// };

// for (const key in obj) {
//   console.log(key);
// }

for (let i = 1; i <= 3; i++) {
  console.log('Outerloop :' + i);
  for (let j = 1; j <= 2; j++) {
    console.log(`     Innerloop: ${j}`);
  }
}
