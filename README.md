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

### Code that doesn't work (start of index.js)
```
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAvTWlN0IC6Ck-xqfLvRG5TvTPnAHB8cWs'
});
```
