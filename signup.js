// Function for signup
$("#signupButton").click(() => {
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
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location = "index.html";
    })
    .catch((error) => {
      console.log('bastard')
      var errorCode = error.code;
      var errorMessage = error.message;
  
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  });
  
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
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
  
      var errorCode = error.code;
      var errorMessage = error.message;
  
      alert(error.message);
    });
  
    window.location = "index.html";
  });
  