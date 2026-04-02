const box = document.getElementById('box');
const output = document.getElementById('output');

// box.addEventListener('keydown', () => {
//   output.textContent = 'Key is Pressed';
// });

// box.addEventListener('keyup', () => {
//   output.textContent = 'Key is released';
// });

box.addEventListener('input', (e) => {
  console.log(e.target.value);
  output.textContent = 'Key is typed ' + e.target.value;
});
