// Initialize the Realtime Database JavaScript SDK : https://firebase.google.com/docs/database/web/start#initialize_the_javascript_sdk



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#config-web-app

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMxBw81NHhTKNyws2Y4zGI25G-RAiUyB8",
  authDomain: "toompang-web.firebaseapp.com",
  databaseURL: "https://toompang-web.firebaseio.com",
  projectId: "toompang-web",
  storageBucket: "",
  messagingSenderId: "1043268270194",
  appId: "1:1043268270194:web:79a982514c45923d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click',handleSignUp());


// Function for signup
function handleSignUp() {

  console.log("Hello World");
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  console.log(email);
  console.log(password);

  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);

  });

  window.location = "index.html"
}

function validatePassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}
