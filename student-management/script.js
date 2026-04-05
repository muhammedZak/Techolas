const form = document.getElementById('student-form');
const modalCloseButton = document.getElementById('btn-close');

const studentName = document.getElementById('studentName');
const studentEmail = document.getElementById('studentEmail');
const phone = document.getElementById('phone');
const age = document.getElementById('studentAge');
const gender = document.getElementById('gender');
const course = document.getElementById('course');
const address = document.getElementById('address');
const errorEle = document.querySelectorAll('p.text-danger');
const modalElement = document.getElementById('exampleModal');
const studentsTable = document.getElementById('table-container');
const searchInput = document.querySelector('input[type="search"]');
const searchForm = document.querySelector('form[role="search"]');

let editingId = null;

modalElement.addEventListener('hidden.bs.modal', () => {
  errorEle.forEach((p) => (p.textContent = ''));
  form.reset();
  document.getElementById('form-btn').textContent = 'Save';
});

const validateForm = () => {
  let isValid = true;

  errorEle.forEach((p) => (p.textContent = ''));

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!studentName.value.trim()) {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  if (!studentEmail.value.trim()) {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(studentEmail.value.trim())) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    isValid = false;
  }

  if (!phone.value.trim()) {
    document.getElementById('phoneError').textContent = 'Phone is required';
    isValid = false;
  } else if (!phoneRegex.test(phone.value.trim())) {
    document.getElementById('phoneError').textContent =
      'Phone must be exactly 10 digits';
    isValid = false;
  }

  const ageValue = Number(age.value);

  if (!age.value) {
    document.getElementById('ageError').textContent = 'Age is required';
    isValid = false;
  } else if (isNaN(ageValue) || ageValue < 18) {
    document.getElementById('ageError').textContent =
      'Age must be a number and at least 18';
    isValid = false;
  }

  if (!gender.value) {
    document.getElementById('genderError').textContent = 'Please select gender';
    isValid = false;
  }

  if (!course.value) {
    document.getElementById('courseError').textContent = 'Please select course';
    isValid = false;
  }

  return isValid;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  let students = JSON.parse(localStorage.getItem('students')) || [];

  const emailValue = studentEmail.value.trim();

  if (editingId) {
    const isEmailExist = students.some(
      (s) => s.email === emailValue && s.id !== editingId,
    );

    if (isEmailExist) {
      return alert('Email already exists!');
    }

    students = students.map((student) =>
      student.id === editingId
        ? {
            ...student,
            name: studentName.value.trim(),
            email: emailValue,
            phone: phone.value.trim(),
            age: Number(age.value),
            gender: gender.value,
            course: course.value,
            address: address.value.trim(),
          }
        : student,
    );

    editingId = null;
  } else {
    const isEmailExist = students.some(
      (s) => s.email === studentEmail.value.trim(),
    );

    if (isEmailExist) {
      return alert('email already exist!');
    }

    const student = {
      id: Date.now(),
      name: studentName.value.trim(),
      email: emailValue,
      phone: phone.value.trim(),
      age: Number(age.value),
      gender: gender.value,
      course: course.value,
      address: address.value.trim(),
    };

    students.push(student);
  }

  localStorage.setItem('students', JSON.stringify(students));

  showStudentsList();

  form.reset();

  const modalElement = document.getElementById('exampleModal');
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
  document.getElementById('form-btn').textContent = 'Save';
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value;
  showStudentsList(searchText);
});

function showStudentsList(searchText = '') {
  let students = JSON.parse(localStorage.getItem('students')) || [];

  if (searchText) {
    const text = searchText.toLowerCase();

    students = students.filter(
      (student) =>
        student.name.toLowerCase().includes(text) ||
        student.email.toLowerCase().includes(text) ||
        student.phone.includes(text) ||
        student.course.toLowerCase().includes(text),
    );
  }

  if (students.length === 0) {
    studentsTable.innerHTML = `<p class="text-center text-muted">No students found. Add students</p>`;
    return;
  }

  let tableHTML = `
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  `;
  students.forEach((student, index) => {
    tableHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.course}</td>
        <td>${student.address}</td>
        <td>
  <div class="d-flex align-items-center justify-content-center gap-2">
    <button class="btn btn-primary edit-btn" data-id="${student.id}">Edit</button>
    <button class="btn btn-danger delete-btn" data-id="${student.id}">
      Delete
    </button>
  </div>
</td>
      </tr>
    `;
  });

  tableHTML += `
        </tbody>
      </table>
    </div>
  `;

  studentsTable.innerHTML = tableHTML;
}

showStudentsList();

const deleteButton = document.getElementById('delete-btn');

studentsTable.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    if (!confirm('Are you sure you want to delete?')) return;
    const id = Number(e.target.getAttribute('data-id'));
    deleteStudent(id);
  }

  if (e.target.classList.contains('edit-btn')) {
    const id = Number(e.target.getAttribute('data-id'));

    editStudent(id);
  }
});

function deleteStudent(id) {
  let students = JSON.parse(localStorage.getItem('students')) || [];

  students = students.filter((student) => student.id !== id);

  localStorage.setItem('students', JSON.stringify(students));

  showStudentsList();
}

function editStudent(id) {
  const students = JSON.parse(localStorage.getItem('students')) || [];

  const student = students.find((student) => student.id === id);
  if (!student) return;

  studentName.value = student.name;
  studentEmail.value = student.email;
  phone.value = student.phone;
  age.value = student.age;
  gender.value = student.gender;
  course.value = student.course;
  address.value = student.address;

  editingId = student.id;

  document.getElementById('form-btn').textContent = 'Update';

  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
}
