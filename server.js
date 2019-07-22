// Dependencies
// =============================================================
var express = require("express");

// var apiRoutes = require("../FriendFinder/app/routing/apiRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data  ok
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("../FriendFinder/app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});