localStorage.setItem('name', 'Zakariya');

localStorage.setItem(
  'person',
  JSON.stringify({
    name: 'Zakariya',
    age: 31,
    address: {
      city: 'Tirur',
      pin: 676102,
    },
  }),
);

// const data = JSON.stringify({
//   name: 'Zakariya',
//   age: 31,
//   address: {
//     city: 'Tirur',
//     pin: 676102,
//   },
// });

// const data = localStorage.getItem('person');

// console.log(JSON.parse(data));

// const DATA = JSON.parse(data);
// console.log(DATA);

localStorage.removeItem('name');
