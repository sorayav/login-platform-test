'use strict';

console.log('Ready');

// Login

const loginBtn = document.getElementById('btn__login');

function login() {
  let userEmail = document.getElementById('email__field').value;
  let userPassword = document.getElementById('password__field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert(`Error: ${errorMessage}`);
  });
}

loginBtn.addEventListener('click', login);