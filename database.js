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


// Function for signup
$("#signupButton").click(function() {
  let email = $('#inputEmail').val();
  let password = $('#inputPassword').val();
  let confirmPassword = $('#confirmPassword').val();

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
    alert("Handler for .click() called."); //TEMP
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);

  });
  window.location = "index.html";
});

// Function for login
$('#loginButton').click(function() {
  let email = $('#inputEmail').val();
  let password = $('#inputPassword').val();

  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;

    alert(error.message);
  });

  window.location = "index.html";
});
