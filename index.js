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

  initAutocomplete();
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

function initAutocomplete() {
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', () => {
    searchBox.setBounds(map.getBounds());
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', () => {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }


      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function getCarLocations(){
  //This function will return a dictionary of car coordinates in the form of {car1: {lat: 1.308, lng: 103.829}, car2: {lat: 13.308, lng: 32.829}} etc from firebase when ppl list their car.
}

function initMarker(carLocations){
  //Adds a custom image marker to this location.

  //Iterates through `carLocations` to get each car location.

  var myLatLng = {lat: 1.308, lng: 103.829};
  var image = 'images/car-placemark.png';

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon: image
  });
}
