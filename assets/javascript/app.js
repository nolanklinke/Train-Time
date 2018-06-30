// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhm_LupLg3-56IrgESXGPaVoAwsBoFZQc",
    authDomain: "choochootrain-3d518.firebaseapp.com",
    databaseURL: "https://choochootrain-3d518.firebaseio.com",
    projectId: "choochootrain-3d518",
    storageBucket: "",
    messagingSenderId: "477999568922"
  };

  firebase.initializeApp(config);

  var databse = firebase.database();

  var trainName = "";
  var trainDestination = "";
  var trainTime = "";
  var trainFrequency = "";