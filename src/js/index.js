const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (!username) {
    let errorusername = document.getElementById('error-username');
    errorusername.innerText = 'Silahkan isi username kalian!';
  } else {
    let removeUsername = document.getElementById('error-username');
    removeUsername.innerText = '';
  }

  if (!password) {
    let errorPassword = document.getElementById('error-password');
    errorPassword.innerText = 'Silahkan isi password kalian!';
  } else {
    let removePassword = document.getElementById('error-password');
    removePassword.innerText = '';
  }
  const user = validasi(username);
  if (user) {
    let password = document.getElementById('password').value;
    if (user.password === password) {
      alert('Login berhasil!');
      const data = document.getElementById('username').value;
      sessionStorage.setItem('login', data);
      window.location.href = 'home.html';
    } else {
      let errorPassword = document.getElementById('error-password');
      errorPassword.innerText = 'Password salah!';
    }
  } else {
    let errorusername = document.getElementById('error-username');
    errorusername.innerText = 'Username salah!';
  }
});

function validasi(usrNm) {
  const data = JSON.parse(localStorage.getItem('user'));
  let dataUser = [];
  data.map((dta, index) => {
    dataUser.push(dta);
  });
  return dataUser.find(({ username }) => username === usrNm);
}
