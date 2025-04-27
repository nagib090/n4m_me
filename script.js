function showLogin() {
  document.getElementById('loginSection').classList.remove('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('loginMessage');

  if (username === 'Nagib090' && password === 'N@gibBh@U*62442%') {
    message.textContent = 'Login successful! Welcome, Nagib.';
    message.style.color = 'lime';
  } else {
    message.textContent = 'Invalid credentials.';
    message.style.color = 'red';
  }
});

function logout() {
  document.getElementById('loginSection').classList.add('hidden');
  document.getElementById('loginMessage').textContent = '';
  alert('Logged out successfully.');
}
