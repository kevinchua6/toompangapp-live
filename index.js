//jshint esversion:6

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAvTWlN0IC6Ck-xqfLvRG5TvTPnAHB8cWs'
});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var Singapore = {
    lat: 	1.43281,
    lng: 103.77959
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: Singapore
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: Singapore,
    map: map
  });


}
