// 1. Change the string array into uppercase array
console.log('Change the string array into uppercase array');
console.log('-----------------------------------------');

const strArray = ['Mango', 'Apple', 'Orange'];

const uppercaseArr = strArray.map((item) => {
  return item.toUpperCase();
});
console.log(uppercaseArr);

// 2. Add 5 to each element of an array
console.log('Add 5 to each element of an array');
console.log('-----------------------------------------');
const numArr = [2, 3, 4, 5, 2];

const addedArr = numArr.map((num) => num + 5);
console.log(addedArr);

// 3.Convert marks to Pass/Fail   in array of marks
console.log('Convert marks to Pass/Fail   in array of marks');
console.log('-----------------------------------------');
const marksArr = [45, 60, 50, 30, 20];

marksArr.forEach((mark, index) => {
  if (mark >= 50) {
    console.log(`Paper ${index + 1} : Pass`);
  } else {
    console.log(`Paper ${index + 1} : Fail`);
  }
});

// 4.Get length of each string in an array
console.log('4.Get length of each string in an array');
console.log('-----------------------------------------');
const strArr = ['Adhityan', 'Asif', 'Fasmil', 'Goutham', 'Shiljith'];

strArr.forEach((str, index) => {
  console.log(
    `Length of the Array string element at index of ${index} is ${str.length}`,
  );
});

// 5. Add index number to each element in an array
console.log('Add index number to each element in an array');
console.log('-----------------------------------------');
const arr = [10, 20, 30, 40];

const result = arr.map((num, index) => num + index);

console.log(result);

// 6. Square every number in an array
console.log('Square every number in an array');
console.log('-----------------------------------------');
const arr2 = [10, 20, 30, 40];

const result2 = arr.map((num) => num * 2);

console.log(result2);

// 7.Add a prefix to names
console.log('Add a prefix to names');
console.log('-----------------------------------------');
const arr3 = ['Adhityan', 'Asif', 'Fasmil', 'Goutham', 'Shiljith'];

arr3.forEach((element, index) => {
  arr3[index] = `Mr. ${element}`;
});
console.log(arr3);
