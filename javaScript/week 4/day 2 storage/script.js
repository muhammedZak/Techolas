localStorage.setItem('name', 'Zakariya');

localStorage.setItem(
  'Person',
  JSON.stringify({
    name: 'Zakariya',
    age: 31,
    address: {
      city: 'Tirur',
      pin: 676102,
    },
  }),
);

const data = JSON.stringify({
  name: 'Zakariya',
  age: 31,
  address: {
    city: 'Tirur',
    pin: 676102,
  },
});

console.log(data);

const DATA = JSON.parse(data);
console.log(DATA);
