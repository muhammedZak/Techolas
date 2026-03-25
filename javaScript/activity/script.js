// Exercise 1: Grade Checker
let score = 85;

if (score >= 90) {
  console.log('Grade A');
} else if (score >= 80) {
  console.log('Grade B');
} else if (score >= 70) {
  console.log('Grade C');
} else {
  console.log('Grade F');
}

// Exercise 2: Even or Odd?
let number = 7;

if (number % 2 === 0) {
  console.log(number + ' is even');
} else {
  console.log(number + ' is odd');
}

// Exercise 3: Age Access
let age = 15;

if (age >= 18) {
  console.log('R-rated movie allowed');
} else if (age >= 13) {
  console.log('PG-13 movie allowed');
} else {
  console.log('Only G movies allowed');
}

// Exercise 4: Temperature Alert
let temp = 25;

if (temp > 30) {
  console.log('Wear light clothes and sunscreen');
} else if (temp >= 20 && temp <= 30) {
  console.log('Wear casual clothes');
} else if (temp >= 10 && temp <= 19) {
  console.log('Wear a jacket');
} else {
  console.log('Wear heavy winter gear');
}

// Exercise 5: Login Validator
let username = 'admin';
let password = 'wrong123';

if (username === 'admin' && password === 'password123') {
  console.log('Login successful');
} else if (username !== 'admin') {
  console.log('Username incorrect');
} else {
  console.log('Password incorrect');
}

// Exercise 6: Traffic Light
let light = 'yellow';

if (light === 'red') {
  console.log('STOP');
} else if (light === 'yellow') {
  console.log('SLOW DOWN');
} else if (light === 'green') {
  console.log('GO');
} else {
  console.log('Invalid traffic light');
}

// Exercise 7: Shopping Discount
let amount = 600;
let member = true;
let discount = 0;

if (amount >= 1000) {
  discount = 0.2;
} else if (amount >= 500) {
  discount = 0.1;
} else if (amount >= 100) {
  discount = 0.05;
}

if (member) {
  discount += 0.05;
}

let finalPrice = amount - amount * discount;

console.log('Final price =', finalPrice);

// Exercise 8: Number Classifier
let number = -15;
let result = '';

if (number > 0) {
  result += 'Positive, ';
} else if (number < 0) {
  result += 'Negative, ';
} else {
  result = 'Zero';
}

if (number !== 0) {
  if (number % 2 === 0) {
    result += 'Even, ';
  } else {
    result += 'Odd, ';
  }

  if (Math.abs(number) < 10) {
    result += 'Single-digit';
  } else {
    result += 'Multi-digit';
  }
}

console.log(result);


// Exercise 9: Leap Year Checker
let year = 2024;

if (year % 400 === 0) {
  console.log(year + ' is a leap year');
} else if (year % 100 === 0) {
  console.log(year + ' is NOT a leap year');
} else if (year % 4 === 0) {
  console.log(year + ' is a leap year');
} else {
  console.log(year + ' is NOT a leap year');
}


// Challenge 1: Calculator with Validation
let num1 = 10;
let num2 = 0;
let operator = '/';

if (operator === '+') {
  console.log(num1 + num2);
} else if (operator === '-') {
  console.log(num1 - num2);
} else if (operator === '*') {
  console.log(num1 * num2);
} else if (operator === '/') {
  if (num2 === 0) {
    console.log('Cannot divide by zero');
  } else {
    console.log(num1 / num2);
  }
} else {
  console.log('Invalid operator');
}

// Challenge 2: Library Fine Calculator
let daysLate = 10;
let fine = 0;

if (daysLate <= 0) {
  fine = 0;
} else if (daysLate <= 7) {
  fine = daysLate * 0.5;
} else if (daysLate <= 14) {
  fine = 7 * 0.5 + (daysLate - 7) * 1;
} else {
  fine = 7 * 0.5 + 7 * 1 + (daysLate - 14) * 2;
  fine += fine * 0.5; // 50% penalty
}

console.log('Fine = $' + fine);


// Challenge 3: Student Status Checker
let attendance = 92;
let grade = 85;

if (attendance >= 95 && grade >= 90) {
  console.log('Excellent');
} else if (attendance >= 90 && grade >= 80) {
  console.log('Good');
} else if (attendance >= 75 && grade >= 70) {
  console.log('Pass');
} else {
  console.log('Need Improvement');
}
