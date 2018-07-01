  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfRX6s1QYA7kanNmlFpz-Xx3cv7e8jxHs",
    authDomain: "choochootrain-3e164.firebaseapp.com",
    databaseURL: "https://choochootrain-3e164.firebaseio.com",
    projectId: "choochootrain-3e164",
    storageBucket: "choochootrain-3e164.appspot.com",
    messagingSenderId: "353889985911"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var trainDestination = "";
  var trainTime = "";
  var trainFrequency = "";
  var trainTimeLeft = "";

  
$("#submitBTN").on("click", function() {
    event.preventDefault();

    trainName = $("#name-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainTime = $("#time-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();

    database.ref().push({
        trainName: trainName,
        trainDestination: trainDestination,
        trainFrequency: trainFrequency,
        trainTime: trainTime,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
});

database.ref().on("child_added", function(snapshot) {

    trainName = snapshot.val().trainName;
    trainDestination = snapshot.val().trainDestination;
    trainFrequency = snapshot.val().trainFrequency;
    trainTime = snapshot.val().trainTime;
    trainTimeLeft = moment();

    var trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
    console.log(trainTimeConverted);
    var currentTime = moment(currentTime).format("HH:mm");
    console.log(currentTime);
    var diffTime = moment().diff(moment(trainTimeConverted), "minutes");
    console.log(diffTime);
    var trainRemainder = diffTime % trainFrequency;
    console.log(trainRemainder);
    var timeTill = trainFrequency - trainRemainder;
    console.log(timeTill);
    var nextTrain = moment().add(timeTill, "minutes");
    console.log(moment(nextTrain).format("HH:mm"));


    var tr = $("<tr>");
    var tdName = $("<td>").text(trainName);
    var tdDestination = $("<td>").text(trainDestination);
    var tdFrequency = $("<td>").text(trainFrequency);
    var tdTime = $("<td>").text(moment(nextTrain).format("HH:mm"));
    var tdTimeLeft = $("<td>").text(timeTill);

    tr.append(tdName);
    tr.append(tdDestination);
    tr.append(tdFrequency);
    tr.append(tdTime);
    tr.append(tdTimeLeft);
    
    

    $("#tbody").append(tr);


}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});