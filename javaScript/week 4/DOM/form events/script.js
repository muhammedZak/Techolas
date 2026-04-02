document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  alert('Hello ' + name);
});
