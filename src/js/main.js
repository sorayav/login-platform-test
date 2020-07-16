'use strict';

// Login

const loginBtn = document.getElementById('btn__login');
const passwordField = document.getElementById('password__field');
const loaderContainer = document.querySelector('.loader__container');

const loader = () => {
  loaderContainer.classList.remove('hide');
};

function login() {
  let userEmail = document.getElementById('email__field').value;
  let userPassword = document.getElementById('password__field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(
      loader()
    )
    .catch(error => {
      var errorMessage = error.message;
      const errorContainer = document.querySelector('.form__error');
      loaderContainer.classList.add('hide');
      errorContainer.innerHTML = `Error: ${errorMessage}`;
      window.addEventListener('keypress', () => { errorContainer.innerHTML = ''; })
    });
}

loginBtn.addEventListener('click', login);

// Pressing enter key on the password field will log in

function enterLogins(event) {
  if(event.keyCode === 13) {
    loginBtn.click();
  }
}
passwordField.addEventListener('keyup', enterLogins);