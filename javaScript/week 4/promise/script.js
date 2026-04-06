// const promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     setTimeout(() => {
//       resolve('Success');
//     }, 1000);
//   } else {

//     setTimeout(() => {
//         reject('Rejected');
//     }, 1000);
//   }
// });

// promise.then((result) => console.log(result)).catch((err) => console.log(err));
// console.log('This is the end');

// function addNumbers(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === 'number' && typeof b === 'number') {
//         resolve(a + b);
//       } else {
//         reject('Both value must be number');
//       }
//     }, 2000);
//   });
// }

// addNumbers('2', 3)
//   .then((res) => console.log('Result : ', res))
//   .catch((err) => console.log('Error', err));

// const checkEven = new Promise((resolve, reject) => {
//   let number = 4;
//   if (number % 2 === 0) resolve('The number is even');
//   else {
//     reject('The number is odd!');
//   }
// });

// checkEven
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// PROMISE.ALL()

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then((result) => console.log('All result : ', result))
//   .catch((err) => console.log(err));

// PROMISE.RACE()

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject(20);
// const p3 = Promise.resolve(30);

// Promise.race([p1, p3, p2])
//   .then((result) => console.log('All result : ', result))
//   .catch((err) => console.log(err));

// PROMISE.ANY()
// const p1 = Promise.reject(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.reject(30);

// Promise.any([p1, p3, p2])
//   .then((result) => console.log('All result : ', result))
//   .catch((err) => console.log(err));
