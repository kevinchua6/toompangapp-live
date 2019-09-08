//Solely meant to initialize the database.

// Initialize the Realtime Database JavaScript SDK : https://firebase.google.com/docs/database/web/start#initialize_the_javascript_sdk



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#config-web-app

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMxBw81NHhTKNyws2Y4zGI25G-RAiUyB8",
  authDomain: "toompang-web.firebaseapp.com",
  databaseURL: "https://toompang-web.firebaseio.com",
  projectId: "toompang-web",
  appId: "1:1043268270194:web:79a982514c45923d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   $('.auth-login').css('display','block');
   $('.auth-logout').css('display','none');
  } else {
    $('.auth-login').css('display','none');
    $('.auth-logout').css('display','block');
  }
});

$('#logoutButton').click(() => {
  firebase.auth().signOut().then(function() {
    location.reload;
  }).catch(function(error) {
    console.log('Unable to sign you out at the moment.');
  });

});
