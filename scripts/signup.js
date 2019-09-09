// Function for signup
$("#signupButton").click(() => {
    const givenName = $('given-name').val();
    const lastName = $('last-name').val();
    const email = $('#inputEmail').val();
    const password = $('#inputPassword').val();
    const confirmPassword = $('#confirmPassword').val();

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

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      //Add user to database
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.database().ref('users/').set({ //user.uid
            dumb: {
            given_name: givenName,
            last_name: lastName,
            }
          })
        } else {
          console.log('no user is logged in..')
        }
      });


      //window.location = "index.html";
    })
    .catch((error) => {
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
