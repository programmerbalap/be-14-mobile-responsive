const form = document.getElementById('form');

function cekUser(data) {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  let user = { username, password, email };
  let userBaru = [];
  if (!data) {
    userBaru.push(user);
    localStorage.setItem('user', JSON.stringify(userBaru));
    alert('Akun berhasil ditambahkan!');
    window.location.href = 'index.html';
  } else {
    userValid(data);
  }
}

function userValid(data) {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  let user = { username, password, email };

  let detailUser = [];
  detailUser.length = 0;
  data.forEach((dta, index) => {
    detailUser.push(dta);
  });

  if (cek(detailUser)) {
    console.log('data sudah ada');
    let errorusername = document.getElementById('error-username');
    errorusername.innerText = 'Username sudah digunakan!';
  } else {
    console.log('data belum ada');
    detailUser.push(user);
    localStorage.setItem('user', JSON.stringify(detailUser));
    let errorusername = document.getElementById('error-username');
    errorusername.innerText = '';
    alert('Akun berhasil ditambahkan!');
    window.location.href = 'index.html';
  }
}

function cek(data) {
  let usrNm = document.getElementById('username').value;
  let user = data.find(({ username }) => username === usrNm);
  if (user) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  if (!username) {
    let errorusername = document.getElementById('error-username');
    errorusername.innerText = 'Silahkan isi username kalian!';
  } else {
    let removeUsername = document.getElementById('error-username');
    removeUsername.innerText = '';
  }

  if (!email) {
    let errorEmail = document.getElementById('error-email');
    errorEmail.innerText = 'Silahkan isi email kalian!';
  } else {
    let removeEmail = document.getElementById('error-email');
    removeEmail.innerText = '';
  }

  if (!password) {
    let errorPassword = document.getElementById('error-password');
    errorPassword.innerText = 'Silahkan isi password kalian!';
  } else {
    let removePassword = document.getElementById('error-password');
    removePassword.innerText = '';
  }

  const dataUser = JSON.parse(localStorage.getItem('user'));
  cekUser(dataUser);
});
