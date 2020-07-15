'use strict';

console.log('Ready');

// Login

const loginBtn = document.getElementById('btn__login');
const passwordField = document.getElementById('password__field');

const loader = () => {
  document.querySelector('.loader__container').classList.remove('hide');
};

function login() {
  let userEmail = document.getElementById('email__field').value;
  let userPassword = document.getElementById('password__field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(function(user) {
      if (user) {
        loader();
      }
    })
    .catch(function(error) {
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