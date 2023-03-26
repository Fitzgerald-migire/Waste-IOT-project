//Database Paths
var dataIntPath = 'trash levels/sensor A';

// Get a database reference 
var databaseInt = database.ref(dataIntPath);

// Variables to save database current values
var sensorReading;

// Attach an asynchronous callback to read the data
databaseInt.on('value', (snapshot) => 
{
  sensorReading = snapshot.val();
  console.log(sensorReading);
  var sensorinfo;
  switch(sensorReading)
  {
    case 0:
      sensorinfo="Bin is Full";
    break;
    case 1:
      sensorinfo="Bin is full";
    break;
    case 2:
      sensorinfo="Bin is full";
    break;
    case 3:
      sensorinfo="Bin is full";
    break;
    case 4:
      sensorinfo="Bin is full";
    break;
    case 5:
      sensorinfo="Bin is full";
    break;
    case 6:
      sensorinfo="Bin is full";
    break;
    case 7:
      sensorinfo="Bin is full";
    break;
    case 8:
      sensorinfo="Bin is full";
    break;
    case 9:
      sensorinfo="Bin is full";
    break;
    case 10:
      sensorinfo="Bin is full";
    break;
    case 11:
      sensorinfo="Bin is almost full";
    break;
    case 12:
      sensorinfo="Bin is almost full";
    break;
    case 13:
      sensorinfo="Bin is almost full";
    break;
    case 14:
      sensorinfo="Bin is almost full";
    break;
    case 15:
      sensorinfo="Bin is almost full";
    break;
    case 16:
      sensorinfo="Bin is almost full";
    break;
    case 17:
      sensorinfo="Bin is half full";
    break;
    case 18:
      sensorinfo="Bin is half full";
    break;
    case 19:
      sensorinfo="Bin is not full";
    break;
    case 20:
      sensorinfo="Bin is not full";
    break;
    case 21:
      sensorinfo="Bin is not full";
    break;
    case 22:
      sensorinfo="Bin is not full";
    break;
    case 23:
      sensorinfo="Bin is not full";
    break;
    case 24:
      sensorinfo="Bin is empty";
    break;
    case 25:
      sensorinfo="Bin is empty";
    break;
    default:
      sensorinfo="Bin is empty"
  }
  document.getElementById("wastelevel").innerHTML = sensorinfo;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


//BIN ID READING
var idPath = 'trash levels/Bin ID';

// Get a database reference 
var idread = database.ref(idPath);

// Variables to save database current values
var idReading;

// Attach an asynchronous callback to read the data
idread.on('value', (snapshot) => {
  idReading = snapshot.val();
  console.log(idReading);
  document.getElementById("BinID").innerHTML = idReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


//location reading
var locationPath = 'trash levels/Location';

// Get a database reference 
var locationread = database.ref(locationPath);

// Variables to save database current values
var locationReading;

// Attach an asynchronous callback to read the data
locationread.on('value', (snapshot) => {
  locationReading = snapshot.val();
  console.log(locationReading);
  document.getElementById("Location").innerHTML = locationReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});