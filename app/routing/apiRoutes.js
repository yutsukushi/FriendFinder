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

    var bestMatch = [{
      name: "",
      photoImage: "",
      totalDiff: 20
    }]
    // run a nested for loop of friends object
    // userAnswers and currFrndAnswer

    // // for every object in friend array,
    for (var f = 0; f < friends.length; f++) {

      var totalDiff = 0;
    //   // difference between each answers index integer to newFriend index answers
        for (var i = 0; i < request.answers.length; i++) { 
       //converts strings to integers per index and pushes into intArray
        
        // collect the difference and add, 
      
        totalDiff += (Math.abs(parseInt(friends[f].answers[i]) - parseInt(request.answers[i])));

        console.log(totalDiff);

        if (bestMatch.totalDiff >= totalDiff) {
          friends[f].name = bestMatch.name;
          friends[f].photoImage = bestMatch.photoImage;
          totalDiff = bestMatch.totalDiff; //prints name
          
        }
    
        console.log(friends[f].name);

      }
      
    }

    // // post photo image in a modal with their name.

    // // if friends index has lowest difference
    // // lowest totalDifference variable will be posted as best match
 
    // send best match photoImage as a modal
    friends.push(request);

    res.json(bestMatch);

    });
    
}
