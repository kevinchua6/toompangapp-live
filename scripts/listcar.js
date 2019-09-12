var carLoc;

$("#listcarButton").click(() => {
  //For when user clicks sign up before inputting the car Location
  if (!carLoc) {
    alert("Please enter car coordinates");
  }
})

function initMap() {
  google.maps.event.addDomListener(window, 'load', autocomplete(carLoc => {

    $("#listcarButton").click(() => {
      const carLocationText = $('#car-location').val();
      const model = $('#model').val();
      const insurance = $('#insurance').val();
      const mobileNumber = $('#mobile-number').val();
      const licenseNumber = $('#license-number').val();

      if (!carLoc) {
        alert("Car location coordinates not found");
      } else {
        var user = firebase.auth().currentUser;
        const userID = user.uid;
        if (user) {
          firebase.database().ref('users/' + userID).set({
              car_location_txt: carLocationText,
              model: model,
              insurance: insurance,
              mobile_number: mobileNumber,
              license_number: licenseNumber,
              car_location_coord: carLoc,
            })
            .then(() => {
              window.location = "index.html";
            })
        } else {
          console.log('No user is logged in.');
        }
      }
    });
  }));
}

function autocomplete(callback) {
  // Create the search box and link it to the UI element.
  var input = document.getElementById('car-location');
  var autocomplete = new google.maps.places.Autocomplete(input);
  // Set to only Singapore
  autocomplete.setComponentRestrictions({
    'country': ['sg', ]
  });

  // Specify only the data fields that are needed.
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

  autocomplete.addListener('place_changed', () => {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      //Some places do not return any geometry for some reason. This does not work: autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
      alert("Returned place contains no geometry");
    } else {
      var carLat = place.geometry['location'].lat();
      var carLng = place.geometry['location'].lng();

      carLoc = [carLat, carLng];
      callback(carLoc);
    }
  });
}
