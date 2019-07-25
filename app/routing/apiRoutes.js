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
    // console.log(request.answers);

    // for loop to turn every answer in array into an integer
    var intArray = []; //integer array for user input
    var totalDiff = [], smArr; //integer array for friends in storage

    // for every object in friend array,
    for (var f = 0; f < friends.length; f++) {
      // difference between each answers index integer to newFriend index answers
        for (var i = 0; i < request.answers.length; i++) { 
          //converts strings to integers per index and pushes into intArray

          intArray.push(parseInt(request.answers[i]));
          
          totalDiff.push(Math.abs(friends[f].answers[i] - intArray[i]));
          // when index hits 9, split to new array.
          
        }

        if (totalDiff.length > 0) {

          smArr = totalDiff.splice(0,10)
    
          console.log(smArr);
    
        }
        
    }

    // collect the difference and add, 
      
      var totalNew = 0;
      var totalFriends = 0;

      for (var i in smArr) { 
        totalNew += intArray[i]; 
        totalFriends += smArr[i];
      }
  
    console.log(totalNew);
    console.log(totalFriends);
    // post photo image in a modal with their name.

    // if friends index has lowest difference
    // lowest totalDifference variable will be posted as best match
    if (totalFriends >= totalNew) {

    }
    // send best match photoImage as a modal
    res.json(request);

    });
    
}
