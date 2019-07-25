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

    var bestMatch = {
      name: "",
      photoImage: "",
      totalDiff: totalDiff
    }
    // run a nested for loop of friends object
    // userAnswers and currFrndAnswers

    var totalDiff = 0;

    // // for every object in friend array,
    for (var f = 0; f < friends.length; f++) {
    //   // difference between each answers index integer to newFriend index answers
        for (var i = 0; i < request.answers.length; i++) { 
       //converts strings to integers per index and pushes into intArray

        // collect the difference and add, 
      
        totalDiff += (Math.abs(parseInt(friends[f].answers[i]) - parseInt(request.answers[i])));

        console.log(totalDiff);
    
      }
        
    }

    // // post photo image in a modal with their name.

    // // if friends index has lowest difference
    // // lowest totalDifference variable will be posted as best match
 
      if (friends[i] >= totalDiff) {
        friends[i].name = bestMatch.name,
        friends[i].photoImage = bestMatch.photoImage,
        totalDiff = bestMatch.totalDiff //prints name
      }
  
    // send best match photoImage as a modal

    res.json(bestMatch);

    });
    
}
