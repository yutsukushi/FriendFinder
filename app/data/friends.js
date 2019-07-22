// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data  ok
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Reservation system (DATA)
// // =============================================================
var friends = [
    {
      customerName: "",
      phoneNumber: "",
      customerEmail: "",
      customerID: ""
    }
  
  ];

  // // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/api/reservations", function(req, res) {
      res.sendFile(path.join(__dirname, "reserve.html"));
    });
  
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });
  
  // Create New reservertaion - takes in JSON input
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newRes)
   if(reservations.length <= 5){
      reservations.push(newRes);
      res = true;
   }else{
       waitList.push(newRes);
       res = false;
   }
  
    
  
    res.json(newRes);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
    