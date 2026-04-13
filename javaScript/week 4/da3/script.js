// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((user) => console.log(user.username))
//   .catch((err) => console.log('Error: ', err));

// let num = 12;

// try {
//   let result = num.toUpperCase();
//   console.log(result);
// } catch (error) {
//   console.log('Error : ', error);
// }

// async function myFunc() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log('Error : ', error);
//   }
// }

const myFunc = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('Error : ', error);
  }
};

myFunc();
