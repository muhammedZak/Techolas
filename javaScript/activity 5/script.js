// ==========================
// forEach()
// ==========================

// BASIC

/* 1.  Print all elements of an array. [1, 2, 3] 1, 2, 3 */
const arr1 = [1, 2, 3];
arr1.forEach((n) => console.log(n));

/* 
2. Print each number after adding 10. [1, 2, 3] 11, 12, 13
*/
arr1.forEach((n) => console.log(n + 10));

/* 
3.  Print the square of each number. [2, 3, 4] 4, 9, 16
*/
[2, 3, 4].forEach((n) => console.log(n * n));

/* 
4.  Print all strings in uppercase. ['apple', 'banana'] APPLE, BANANA
*/
['apple', 'banana'].forEach((s) => console.log(s.toUpperCase()));

/* 
5.  Count the total elements using an external variable. [10, 20, 30, 40] count = 4
*/
let count = 0;
[10, 20, 30, 40].forEach(() => count++);
console.log('count =', count);

// INTERMEDIATE

/* 
1.  Sum all numbers using an external variable. [5, 10, 15] sum = 30
*/
let sum = 0;
[5, 10, 15].forEach((n) => (sum += n));
console.log('sum =', sum);

/* 
2.  Count how many even numbers are in the array. [2, 5, 8, 11, 14] evenCount = 3
*/
let evenCount = 0;
[2, 5, 8, 11, 14].forEach((n) => {
  if (n % 2 === 0) evenCount++;
});
console.log('evenCount =', evenCount);

/* 
3. Push doubled values into a new array. [1, 2, 3] [2, 4, 6]
*/
let doubled = [];
[1, 2, 3].forEach((n) => doubled.push(n * 2));
console.log(doubled);

/* 
4.  Print each index along with its value. ['a', 'b', 'c'] 0:a, 1:b, 2:c
*/
['a', 'b', 'c'].forEach((val, i) => console.log(`${i}:${val}`));

/* 
5.  Convert an array of words into their lengths. ['book', 'pen', 'notebook'] [4, 3, 8]
*/
let lengths = [];
['book', 'pen', 'notebook'].forEach((w) => lengths.push(w.length));
console.log(lengths);

// ADVANCED

/* 
1.  Flatten a 2D array using only forEach(). [[1, 2], [3, 4]] [1, 2, 3, 4]
*/
let flat = [];
[
  [1, 2],
  [3, 4],
].forEach((arr) => {
  arr.forEach((n) => flat.push(n));
});
console.log(flat);

/* 
2.  Group numbers into even and odd categories in an object. [1, 2, 3, 4, 5] { even: [2, 4], odd: [1, 3, 5] }
*/
let grouped = { even: [], odd: [] };
[1, 2, 3, 4, 5].forEach((n) => {
  (n % 2 === 0 ? grouped.even : grouped.odd).push(n);
});
console.log(grouped);

/* 
3.  Count the frequency of each element in an array. [1, 2, 1, 3, 2, 1] { 1: 3, 2: 2, 3: 1 }
*/
let freq = {};
[1, 2, 1, 3, 2, 1].forEach((n) => {
  freq[n] = (freq[n] || 0) + 1;
});
console.log(freq);

/* 
4.  Build an object from an array of keys and default values. ['name', 'age'] { name: 'N/A', age: 'N/A' }
*/
let obj = {};
['name', 'age'].forEach((k) => (obj[k] = 'N/A'));
console.log(obj);

// ==========================
// map()
// ==========================

// BASIC

/* 
1.  Double each number in an array. [1, 2, 3] [2, 4, 6]
*/

const doubledArr = [1, 2, 3].map((n) => n * 2);
console.log(doubledArr);

/* 
2.  Convert numbers into strings. [10, 20] ['10', '20']
*/
const strArr = [10, 20].map((n) => n.toString());
console.log(strArr);

/* 
3.  Convert all strings to uppercase. ['a', 'b'] ['A', 'B']
*/
const uppurArr = ['a', 'b'].map((s) => s.toUpperCase());
console.log(uppurArr);

/* 
4.  Get the length of each word. ['cat', 'house'] [3, 5]
*/
const lengthArr = ['cat', 'house'].map((w) => w.length);
console.log(lengthArr);

/* 
5.  Add 5 to every element. [1, 2, 3] [6, 7, 8]
*/
const addedArr = [1, 2, 3].map((n) => n + 5);
console.log(addedArr);

// INTERMEDIATE

/* 
1.  Extract only the names from an array of objects. [{ name: 'A' }, { name: 'B' }] ['A', 'B']
*/
const namesArr = [{ name: 'A' }, { name: 'B' }].map((o) => o.name);
console.log(namesArr);

/* 
2. Add GST to each product price. [{ price: 500 }, { price: 1000 }] [590, 1180]
*/
const totalPrices = [{ price: 500 }, { price: 1000 }].map(
  (p) => p.price * 1.18,
);
console.log(totalPrices);

/* 
3.  Create an array showing whether each number is even. [1, 2, 3] [false, true, false]
*/
const evenArr = [1, 2, 3].map((n) => n % 2 === 0);
console.log(evenArr);

/* 
4. Format first name and last name into full names. [{ first: 'A', last: 'B' }] ['A B']
*/
const formattedArr = [{ first: 'A', last: 'B' }].map(
  (o) => `${o.first} ${o.last}`,
);
console.log(formattedArr);

/* 
5.  Convert an array into objects like { value: x }. [1, 2] [{ value: 1 }, { value: 2 }]
*/
const convertedArr = [1, 2].map((n) => ({ value: n }));
console.log(convertedArr);

// ADVANCED

/* 
1. Transform a nested array into a new structure. [[1, 2], [3, 4]] [[2, 4], [6, 8]]
*/
const transormedArr = [
  [1, 2],
  [3, 4],
].map((arr) => arr.map((n) => n * 2));
console.log(transormedArr);

/* 
2.  Add a computed property to each object. [{ name: 'A', score: 10 }] [{ name: 'A', score: 10, grade: 'A' }]
*/
const computedArr = [{ name: 'A', score: 10 }].map((o) => ({
  ...o,
  grade: 'A',
}));
console.log(computedArr);

/* 
3.  Convert an array into an indexed object-like structure. ['x', 'y'] [{ index: 0, value: 'x' }, { index: 1, value: 'y' }]
*/
const indexedArr = ['x', 'y'].map((v, i) => ({ index: i, value: v }));
console.log(indexedArr);

/* 
4. Normalize a sample API response into a clean array. [{ id: 1, name: 'A', role: 'admin' }, { id: 2, name: 'B',
role: 'user' }] [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
*/
const res = [
  { id: 1, name: 'A', role: 'admin' },
  { id: 2, name: 'B', role: 'user' },
].map(({ id, name }) => ({ id, name }));
console.log(res);

// ==========================
// filter()
// ==========================

// BASIC

/* 
1.  Get all even numbers from an array. [1, 2, 3, 4] [2, 4]
*/
const evnArr = [1, 2, 3, 4].filter((n) => n % 2 === 0);
console.log(evenArr);

/* 
2.  Get numbers greater than 10. [5, 12, 18] [12, 18]
*/
const greaterArr = [5, 12, 18].filter((n) => n > 10);
console.log(greaterArr);

/* 
3.  Filter strings longer than 5 characters. ['apple', 'banana', 'pear'] ['banana']
*/
const strLengthArr = ['apple', 'banana', 'pear'].filter((s) => s.length > 5);
console.log(strLengthArr);

/* 
4. Remove falsy values from an array. [0, 1, false, '', 2] [1, 2]
*/
const falsyArr = [0, 1, false, '', 2].filter(Boolean);
console.log(falsyArr);

/* 
5. Get all positive numbers. [-2, -1, 0, 1, 2] [1, 2]
*/
const positiveNum = [-2, -1, 0, 1, 2].filter((n) => n > 0);
console.log(positiveNum);

// INTERMEDIATE

/* 
1.  Filter users who are above 18 years old. [{ age: 20 }, { age: 17 }] [{ age: 20 }]
*/
const adultArr = [{ age: 20 }, { age: 17 }].filter((u) => u.age > 18);
console.log(adultArr);

/* 
2. Get products with price below 1000. [{ price: 800 }, { price: 1200 }] [{ price: 800 }]
*/
const priceBelowArr = [{ price: 800 }, { price: 1200 }].filter(
  (p) => p.price < 1000,
);
console.log(priceBelowArr);

/* 
3.  Remove duplicate values from an array. [1, 2, 1, 3, 2] [1, 2, 3]
*/
const duplicateArr = [1, 2, 1, 3, 2].filter(
  (v, i, arr) => arr.indexOf(v) === i,
);
console.log(duplicateArr);

/* 
4.  Filter only active users. [{ active: true }, { active: false }] [{ active: true }]
*/
const activeUsers = [{ active: true }, { active: false }].filter(
  (u) => u.active,
);
console.log(activeUsers);

/* 
5.  Filter words that start with the letter a. ['apple', 'banana', 'apricot'] ['apple', 'apricot']
*/
const filteredLetters = ['apple', 'banana', 'apricot'].filter((w) =>
  w.startsWith('a'),
);
console.log(filteredLetters);

// ADVANCED

/* 
1.  Filter items from a nested array based on a condition. [[1, 2], [3, 4], [5, 6]] [[3, 4], [5, 6]]
*/
const nestedFiltered = [
  [1, 2],
  [3, 4],
  [5, 6],
].filter((arr) => arr.some((n) => n > 2));
console.log(nestedFiltered);

/* 
2. Combine filter() and map() to build a small data pipeline. [{ name: 'A', active: true }, { name: 'B', active: false
}] ['A']
*/
const data = [
  { name: 'A', active: true },
  { name: 'B', active: false },
]
  .filter((u) => u.active)
  .map((u) => u.name);
console.log(data);

/* 
3.  Build a simple search result filter by keyword. [{ title: 'Phone' }, { title: 'Laptop' }] [{ title: 'Phone' }]
*/
const result = [{ title: 'Phone' }, { title: 'Laptop' }].filter((p) =>
  p.title.includes('Phone'),
);
console.log(result);

/* 
4.  Apply multiple conditions in one filter() call. [{ age: 20, active: true }, { age: 16, active: true }] [{ age: 20, active: true }]
*/
const resultArr = [
  { age: 20, active: true },
  { age: 16, active: true },
].filter((u) => u.age > 18 && u.active);
console.log(resultArr);

// ==========================
// some()
// ==========================

console.log([5, 12, 3].some((n) => n > 10));
console.log([1, 3, 4].some((n) => n % 2 === 0));
console.log(['a', ''].some((s) => s === ''));
console.log([2, -1, 5].some((n) => n < 0));
console.log([1, null, 3].some((v) => v === null));

// ==========================
// every()
// ==========================

console.log([1, 2, 3].every((n) => n > 0));
console.log([2, 4, 6].every((n) => n % 2 === 0));
console.log(['cat', 'home'].every((s) => s.length > 2));
console.log([1, 'a', true].every(Boolean));
console.log([10, 20, 99].every((n) => n < 100));

// ==========================
// find()
// ==========================

console.log([1, 4, 7].find((n) => n % 2 === 0));
console.log([5, 12, 3].find((n) => n > 10));
console.log(['hi', 'hello', 'world'].find((s) => s.length > 5));
console.log([-3, -1, 2].find((n) => n < 0));
console.log([0, '', false, 'yes'].find(Boolean));

// ==========================
// reduce()
// ==========================

// Basic
console.log([1, 2, 3].reduce((a, b) => a + b, 0));
console.log([2, 3, 4].reduce((a, b) => a * b, 1));
console.log(['a', 'b', 'c'].reduce((acc) => acc + 1, 0));
console.log([5, 9, 2].reduce((a, b) => Math.max(a, b)));
console.log(['a', 'b', 'c'].reduce((a, b) => a + b, ''));

// Intermediate
console.log([1, 2, 3, 4].reduce((acc, n) => (n % 2 === 0 ? acc + 1 : acc), 0));

console.log(
  [1, 2, 3, 4].reduce(
    (acc, n) => {
      (n % 2 === 0 ? acc.even : acc.odd).push(n);
      return acc;
    },
    { even: [], odd: [] },
  ),
);

console.log([[1], [2], [3]].reduce((acc, arr) => acc.concat(arr), []));

console.log(
  ['a', 'b'].reduce((acc, v, i) => {
    acc[i] = v;
    return acc;
  }, {}),
);

console.log(
  [1, 2, 1, 3, 2].reduce((acc, v) => {
    if (!acc.includes(v)) acc.push(v);
    return acc;
  }, []),
);

// Advanced
console.log(
  [{ cat: 'A' }, { cat: 'B' }, { cat: 'A' }].reduce((acc, obj) => {
    acc[obj.cat] = acc[obj.cat] || [];
    acc[obj.cat].push(obj);
    return acc;
  }, {}),
);

console.log(
  ['a', 'b', 'a'].reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {}),
);

console.log(
  [
    { dept: 'Sales', amount: 100 },
    { dept: 'Sales', amount: 200 },
  ].reduce((acc, obj) => {
    acc[obj.dept] = (acc[obj.dept] || 0) + obj.amount;
    return acc;
  }, {}),
);

console.log(
  [1, 2, 3].reduce((acc, n) => {
    acc.push(n * 2);
    return acc;
  }, []),
);
