'use strict';

console.log('Ready');

// Login

const loginBtn = document.getElementById('btn__login');
const passwordField = document.getElementById('password__field');

function login() {
  let userEmail = document.getElementById('email__field').value;
  let userPassword = document.getElementById('password__field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(document.querySelector('.loader__container').classList.remove('hide'))
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert(`Error: ${errorMessage}`);
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