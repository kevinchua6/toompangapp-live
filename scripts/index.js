//jshint esversion:6
var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 1.306,
      lng: 103.829
    },
    zoom: 17
  });
  infoWindow = new google.maps.InfoWindow;

  google.maps.event.addDomListener(window, 'load', autocomplete);

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  getCarLocations(carLocations => {
    initMarker(carLocations);
  })
}

function getCarLocations(callback) {
  //This function will return a array of car coordinates in the form of [[userID, [1.308, lng: 103.829], [userID, lat: 13.308, lng: 32.829]] etc from firebase when ppl list their car.

  firebase.database().ref("users").on('value', function(snapshot) {
    //This loop iterates over children of users
    console.log(snapshot) //TEMP
    let userIDcarLocArray = [];
    snapshot.forEach(function(retrievedUser) {
      const userID = retrievedUser.key;
      const carLoc = retrievedUser.val().car_location_coord;

      const userIDcarLoc = [userID, carLoc];
      userIDcarLocArray.push(userIDcarLoc);
    });
    console.log(userIDcarLocArray); //TEMP
    callback(userIDcarLocArray);
  })
}


function initMarker(carLocations) {
  //Iterates through `carLocations` to get each car location.
  for (i of carLocations) {
    //Gets [[userID, [1.308, lng: 103.829], [userID, lat: 13.308, lng: 32.829]]
    const userID = i[0]
    if (i[1]) {

      const carLatLng = {
        lat: i[1][0],
        lng: i[1][1]
      };

      const image = 'images/car-placemark.png';

      var marker = new google.maps.Marker({
        position: carLatLng,
        map: map,
        title: userID, //Note: make sure to change this to first name + last name
        icon: image
      });
    } else {
      console.log('No coord info found for this user: ' + i[0])
    }
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: Cannot find your location.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function autocomplete() {
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
  // Set to only Singapore
  autocomplete.setComponentRestrictions({
    'country': ['sg', ]
  });

  // Specify only the data fields that are needed.
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  autocomplete.addListener('place_changed', () => {
    var place = autocomplete.getPlace();

    if (!place.geometry) {
      alert("Returned place contains no geometry. Name: '" + place.name + "'");
      return;
    }

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      map.fitBounds(place.geometry.viewport);
    } else {
      //bounds.extend(place.geometry.location);
    }

    //map.fitBounds(bounds);
  });
}
