//jshint esversion:6

const express = require("express");
const app = express();
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAvTWlN0IC6Ck-xqfLvRG5TvTPnAHB8cWs'
});
//jshint esversion:6
const express = require("express");
const app = express();
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAvTWlN0IC6Ck-xqfLvRG5TvTPnAHB8cWs'
});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -25.344,
    lng: 131.036
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
