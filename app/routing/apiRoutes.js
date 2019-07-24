// might need possibly for modal popup
var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
     res.json(friends);
     console.log(friends);
    });
  
  // Create New reservertaion - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    var request = req.body;
    // convert answers array from string to integers
    console.log(request.answers);
    // for loop to turn every answer in array into a number
    var intArray = [];

    for (var i = 0; i < request.answers.length; i++) {

      intArray.push(parseInt(request.answers[i]));

    }
    
    console.log(intArray);
    // calculate between friends array answers and new friend array answers
    // lowest totalDifference variable will be posted as best match
    // send best match photoImage as a modal
    res.json(request);

    });
    
}
