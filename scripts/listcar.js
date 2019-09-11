google.maps.event.addDomListener(window, 'load', autocomplete);

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

function autocomplete() {
  // Create the search box and link it to the UI element.
  var input = document.getElementById('car-location');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', () => {
    var place = autocomplete.getPlace();
  });
}
