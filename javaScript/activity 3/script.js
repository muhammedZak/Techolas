// Exercise 1: Sum All Numbers (for loop)
// Write a program that calculates the sum of all numbers in an array:
// • Use a for loop
// • Iterate through each element
// • Add to running total
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: 15
// const nums = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }

// console.log(sum);

// Exercise 2: Print Array (for-of loop)
// Write a program that prints each element of an array using for-of loop:
// • Use for-of to iterate
// • Print each element on a new line
// • No need for index
// Example Input: ["cat", "dog", "bird"]
// Expected Output: cat, dog, bird (on separate lines)
// const strArr = ['cat', 'dog', 'bird'];

// for (const arr of strArr) {
//   console.log(arr);
// }

// Exercise 3: Object Properties (for-in loop)
// Write a program that prints all properties and values of an object:
// • Use for-in loop
// • Print "key: value" format
// Example Input: {name: "Alice", age: 25, city: "NYC"}
// Expected Output: name: Alice, age: 25, city: NYC

// const obj = { name: 'Alice', age: 25, city: 'NYC' };

// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

// Exercise 4: Character Count (for-of loop)
// Write a program that counts total characters in a string using for-of:
// • Use for-of to iterate through characters
// • Don't count spaces
// • Return the count
// Example Input: "hello world"
// Expected Output: 10 (not counting the space)

// const str = 'hello world';

// let strLength = 0;
// for (const ele of str) {
//   if (ele !== ' ') {
//     strLength += 1;
//   }
// }
// console.log(strLength);

// Exercise 5: Multiplication Table (for loop)
// Write a program that prints a multiplication table using nested for loops:
// • Create a 5x5 multiplication table
// • Use nested for loops
// • Format as rows
// Example:
// 1x1=1 1x2=2 1x3=3 ...
// 2x1=2 2x2=4 2x3=6 ...

// let i = 1;
// const length = 5;

// for (i; i <= length; i++) {
//   let row = '';

//   for (let j = 1; j <= length; j++) {
//     row += `${j}x${i} = ${i * j}   `;
//   }

//   console.log(row);
// }

// Exercise 6: Find Maximum (for loop)
// Write a program that finds the maximum number in an array:
// • Use a for loop
// • Compare each element
// • Return the maximum value and its index
// Example Input: [5, 2, 8, 1, 9, 3]
// Expected Output: Max value: 9, Index: 4

// const maxArr = [5, 2, 8, 1, 9, 3];

// let maxValue = maxArr[0];
// let index;

// for (let i = 1; i < maxArr.length; i++) {
//   if (maxValue < maxArr[i]) {
//     maxValue = maxArr[i];
//     index = i;
//   }
// }

// console.log(`Max value: ${maxValue}, Index: ${index}`);

// Exercise 7: Filter Even Numbers (for-of loop)
// Write a program that creates a new array with only even numbers:
// • Use for-of to iterate
// • Check if number is even
// • Add to new array if it is
// • Return the new array
// Example Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [2, 4, 6]

// const arr = [1, 2, 3, 4, 5, 6];
// const filteredArr = [];

// for (const ele of arr) {
//   if (ele % 2 === 0) {
//     filteredArr.push(ele);
//   }
// }

// console.log(filteredArr);

// Exercise 8: Count Property Values (for-in loop)
// Write a program that counts how many times each property appears in an object array:
// • Use for-in to get property names
// • Use for-of to iterate through array
// • Count occurrences
// Example Input: [{status: "active"}, {status: "active"}, {status: "inactive"}]
// Expected Output: active: 2, inactive: 1

// const arr = [
//   { status: 'active' },
//   { status: 'active' },
//   { status: 'inactive' },
// ];

// let activeCount = 0;
// let inactiveCount = 0;

// for (const ele of arr) {
//   for (const key in ele) {
//     if (ele[key] === 'active') {
//       activeCount++;
//     } else if (ele[key] === 'inactive') {
//       inactiveCount++;
//     }
//   }
// }
// console.log(`Active: ${activeCount}, Inactive: ${inactiveCount}`);

// Exercise 9: Matrix Operations (nested for loops)
// Write a program that works with a 3x3 matrix (2D array):
// • Print the matrix
// • Calculate row sums
// • Calculate column sums
// • Find diagonal sum (top-left to bottom-right)
// Example Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Expected Output:
// Row sums: [6, 15, 24]
// Column sums: [12, 15, 18]
// Diagonal sum: 15

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const rowSums = [];
// const colSums = [];
// let diagonalSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   let rowSum = 0;
//   let colSum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     rowSum += arr[i][j];
//     colSum += arr[j][i];
//   }
//   diagonalSum += arr[i][i];
//   rowSums.push(rowSum);
//   colSums.push(colSum);
// }

// console.log(`Row sums: ${rowSums}`);
// console.log(`Column sums: ${colSums}`);
// console.log(`Diagonal sum: ${diagonalSum}`);

// Exercise 10: String Manipulation (for-of + for loop)
// Write a program that reverses a string and counts vowels:
// • Use for-of to iterate characters
// • Reverse the string
// • Count vowels (a, e, i, o, u)
// • Return both results
// Example Input: "javascript"
// Expected Output:
// Reversed: tpircsavaj
// Vowel count: 3 (a, a, i)

// const str = 'javascript';

// let reversed = '';
// const vowel = 'aeiou';
// let count = 0;

// for (const ele of str) {
//   reversed = ele + reversed;
//   for (let i = 0; i < vowel.length; i++) {
//     if (ele === vowel[i]) {
//       count++;
//     }
//   }
// }

// console.log(reversed);
// console.log(count);

// Exercise 11: Deep Clone Object (for-in loop)
// Write a program that creates a copy of an object using for-in:
// • Use for-in to iterate properties
// • Copy each property to new object
// • Verify original and copy are different objects
// Example Input: {name: "John", age: 30, city: "NYC"}
// Expected Output: A new object with same properties

// const obj = { name: 'John', age: 30, city: 'NYC' };

// const copiedObj = {};

// for (const key in obj) {
//   copiedObj[key] = obj[key];
// }

// console.log(copiedObj)

// Exercise 12: Search & Replace
// Write a program that searches for items in an array and replaces them:
//
// • Find matching items
// • Replace with new value
// • Return modified array
// Example Input: array = [1, 2, 3, 2, 4], searchFor = 2, replaceWith = 10
// Expected Output: [1, 10, 3, 10, 4]

// const arr = [1, 2, 3, 2, 4];

// for (const ele of arr) {
//   if (ele === 2) {
//     const index = arr.indexOf(ele);
//     arr[index] = 10;
//   }
// }

// console.log(arr);

// Challenge 1: Prime Number Finder
// Write a program that finds all prime numbers up to N:
// • Use nested for loops
// • Check each number for divisors
// • Store primes in array
// • Return all primes
// Example Input: N = 20
// Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

// const n = 20;

// for (let i = 1; i <= n; i++) {
//     if()
// }

const greet = () => console.log('HIII');
greet();
