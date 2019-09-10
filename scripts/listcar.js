$("#listcarButton").click(() => {
      const carLocation = $('#car-location').val();
      const model = $('#model').val();
      const insurance = $('#insurance').val();
      const mobileNumber = $('#mobile-number').val();
      const licenseNumber = $('#license-number').val();

      var user = firebase.auth().currentUser;
      const userID = user.uid;
      if (user) {
        firebase.database().ref('users/' + userID).set({
            car_location: carLocation,
            model: model,
            insurance: insurance,
            mobile_number: mobileNumber,
            license_number: licenseNumber,
          })
          .then(() => {
            window.location = "index.html";
          })
      } else {
        console.log('No user is logged in.');
      }
});
