  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfRX6s1QYA7kanNmlFpz-Xx3cv7e8jxHs",
    authDomain: "choochootrain-3e164.firebaseapp.com",
    databaseURL: "https://choochootrain-3e164.firebaseio.com",
    projectId: "choochootrain-3e164",
    storageBucket: "",
    messagingSenderId: "353889985911"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var trainDestination = "";
  var trainTime = "";
  var trainFrequency = "";

  
$("#submitBTN").on("click", function() {
    event.preventDefault();

    trainName = $("#name-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainTime = $("#time-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();

    database.ref().push({
        trainName: trainName,
        trainDestination: trainDestination,
        trainTime: trainTime,
        trainFrequency: trainFrequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");



});