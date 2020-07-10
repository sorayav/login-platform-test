'use strict';

console.log('Ready');

// document.querySelector('.form').addEventListener('submit', (ev) => ev.preventDefault());

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     document.location.href = '/userpage.html';
//     setInterval(() => {
//       window.stop();
//     }, 500);
//     // window.stop();
//     // document.location.href = '/userpage.html';
//     // alert('logueado');
//   } else {
//     // alert('no logueado');
//     document.location.href = '/index.html';
//     setInterval(() => {
//       window.stop();
//     }, 500);
//   }
// });


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

// Logout

const logoutBtn = document.getElementById('btn__logout');

function logout() {
  firebase.auth().signOut();
}

logoutBtn.addEventListener('click', logout);