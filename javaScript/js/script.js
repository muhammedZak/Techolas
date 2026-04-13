// const str = 'malayalam';
// // const arr = Array.from(str);
// // console.log(arr);

// function palin(str) {
//   const rev = str.split('').reverse().join('');
//   console.log(rev);
// }

// palin(str);

for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}
