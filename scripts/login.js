// Function for login
$('#loginButton').click(() => {
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

  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    window.location = "index.html";
  })
  .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;

    alert(error.message);
  });


});
