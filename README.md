# Toompang Web App
Used for people to rent and list cars.

<br>
<hr>
<br>

## Notes
 - Branch major/buggy features instead of committing to `master`
 - Google maps API will be done later.



<br>
<hr>
<br>

## TODO

- Functions to click on nearby cars to rent/view them in the viewport on the right

- Show nearby cars in viewport

- Button and explanation at the bottom to list your car

- Make sure that api key is invisible (use google to restrict requests to our domain atm)
<br>

#### Long term features to be added

- When register, require car plate no, state, car description, drivers license etc etc
<br>

#### Long long long term features to be added  

- Machine Learning for recommendation of what cars to book

- credit card scanning to get details


# Commented out codes
<br>

###Index.js  
Code to place icons and markers when search  
```
var icon = {
 url: place.icon,
 size: new google.maps.Size(71, 71),
 origin: new google.maps.Point(0, 0),
 anchor: new google.maps.Point(17, 34),
 scaledSize: new google.maps.Size(25, 25)
};

// Create a marker for each place.
markers.push(new google.maps.Marker({
 map: map,
 icon: icon,
 title: place.name,
 position: place.geometry.location
}));
```
Code to clear old markers upon search  
```
// Clear out the old markers.
 markers.forEach(function(marker) {
   marker.setMap(null);
 });
 markers = [];
 ```

### Code that doesn't work (start of index.js)
```
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAvTWlN0IC6Ck-xqfLvRG5TvTPnAHB8cWs'
});
```
