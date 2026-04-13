/* const form = document.getElementById('form');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value.trim();

  const errors = [];
  // Regex: only letters and spaces, minimum 3 characters
  const nameRegex = /^[A-Za-z ]{3,}$/;

  // Regex: minimum 6 characters and at least one digit
  const passwordRegex = /^(?=.*\d).{6,}$/;

  if (name === '') {
    errors.push('Name is required');
  } else if (!nameRegex.test(name)) {
    errors.push(
      'Name must contain only letters and be at least 3 characters long',
    );
  }

  // Validate password
  if (password === '') {
    errors.push('Password is required');
  } else if (!passwordRegex.test(password)) {
    errors.push(
      'Password must be at least 6 characters long and contain a number',
    );
  }

  // Show validation result
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.map((error) => `<p>${error}</p>`).join('');
    errorDiv.style.color = 'red';
  } else {
    errorDiv.innerHTML = '<p>Form submitted successfully!</p>';
    errorDiv.style.color = 'green';
    form.reset();
  }
});
 */

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  start() {
    console.log(`${this.name} is starting`);
  }
}

const car1 = new Car('Creta', 'Huyundai');

car1.start();

const car2 = new Car('ford', 'mustang');
car2.start();
