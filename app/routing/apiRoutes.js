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
    var intArray = [];
    var totalDiff = [];

    // for every object in friend array,
    for (var f = 0; f < friends.length; f++) {
      // difference between each answers index integer to newFriend index answers
          for (var i = 0; i < request.answers.length; i++) { 
            //converts strings to integers per index and pushes into intArray
            intArray.push(parseInt(request.answers[i]));
            
            totalDiff.push(Math.abs(friends[f].answers[i] - intArray[i]));

            // if (totalDiff[i] >= 9) {
            //   intArray = [];
            //   totalDiff = [];
            // }
            
            console.log(totalDiff);
            
          }
        }
    
    //  console.log(friends[0].answers[0] - intArray[0]);
    // collect the difference and add, if friends index has lowest difference
    // post photo image in a modal with their name.
    
    console.log(intArray);
    // console.log(totalDiff);

    // calculate between friends array answers and new friend array answers
    // for loop to do comparison calculation for each friend
    
    
    // lowest totalDifference variable will be posted as best match
    // send best match photoImage as a modal
    res.json(request);

    });
    
}
