// // const numbers = [1, 2, 3, 4, 5];

// // const newArr = numbers.map((item) => console.log(item > 3));

// // console.log(newArr);

// // const numbers = [1, 2, 3, 4, 5];
// // const filterdArr = numbers.filter((item) => item > 3);
// // console.log(filterdArr);

// // const numbers = [1, 2, 3, 4, 5];

// // const sum = numbers.reduce((acc, val) => {
// //     console.log(acc)
// //   return acc + val;
// // });

// // console.log(sum)

// // const fruites = ['Apple', 'Banana', 'Kiwi'];
// // fruites.forEach((fruit) => console.log(fruit));

// // console.log(`My age is ${5 > 6 ? 'yes' : 'no'}`);

// // function test(a, ...rest) {
// //   console.log(rest);
// //   console.log(a);
// // }

// // test(1, 2, 3, 'fgf');

// // function myFunc(...args) {
// //   // return args.reduce((acc, ele) => acc + ele);
// //   const value = args.reduce((acc, ele) => acc + ele);
// //   return { value };
// // }

// // const result = myFunc(1, 2, 3, 4, 5);
// // console.log( result);

// const arr = [12, 32, 55, 77, 88];
// const arr2 = [5, 5, 4, 89, 1, 3, 3];

// const mergedArr = [...arr, ...arr2];
// console.log(mergedArr);

// const copyArr = [...mergedArr, 5, 6, 4, 6, 4, 8, 8];
// console.log(copyArr);

// const obj1 = {
//   name: 'Jishnu',
// };

// const obj2 = {
//   name: 'Goutham',
// };

// const obj3 = { ...obj1, ...obj2, ...arr2 };
// console.log(obj3);

// Passing array as an argument

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const arr = {
  ...nums,
};
console.log(arr);
console.log(add(...nums));
