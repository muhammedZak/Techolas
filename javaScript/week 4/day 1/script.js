// const arr = [10, 20, 30];

// const [first, second, third] = arr;

// console.log(first + ' ' + second + ' ' + third);

// console.log(typeof first)

// const [x, y = 10, z] = [10, 20, 30];
// console.log(x, y, z);

const obj = {
  name: 'Zakariya',
  age: 31,
  address: {
    city: 'Tirur',
    pin: 676102,
  },
};

const {
  name: myName,
  age,
  address: { city: myCity, pin },
} = obj;

console.log(myName);
// console.log(name);
console.log(myName, age, myCity, pin);
