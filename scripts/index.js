//jshint esversion:6
var map, infoWindow;

function initMap(){
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

  let carLocations = getCarLocations()
  initMarker(carLocations);
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
  autocomplete.setComponentRestrictions({'country': ['sg',]});

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

function getCarLocations(){
  return null
  //This function will return a dictionary of car coordinates in the form of {car1: {lat: 1.308, lng: 103.829}, car2: {lat: 13.308, lng: 32.829}} etc from firebase when ppl list their car.
}

function initMarker(){
  //Adds a custom image marker to this location.

  //Iterates through `carLocations` to get each car location.

  //TODO: Make car image background transparent
  var myLatLng = {lat: 1.308, lng: 103.829};
  var image = 'images/car-placemark.png';

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon: image
  });
}
