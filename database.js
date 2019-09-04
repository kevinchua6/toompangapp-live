// Initialize the Realtime Database JavaScript SDK : https://firebase.google.com/docs/database/web/start#initialize_the_javascript_sdk

// Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAMxBw81NHhTKNyws2Y4zGI25G-RAiUyB8",
    authDomain: "toompang-web.firebaseapp.com",
    databaseURL: "https://toompang-web.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
