angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSklm2qatTO1Bg6n_pu6BAwtxjBAchMYY",
    authDomain: "marias-26786.firebaseapp.com",
    databaseURL: "https://marias-26786.firebaseio.com",
    storageBucket: "marias-26786.appspot.com",
  };
  firebase.initializeApp(config);

});