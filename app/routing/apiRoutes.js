var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
     res.json(friends);
     console.log(friends);
  });
  
  app.post("/api/friends", function(req, res) {

    var userInfo = req.body;

    var bestMatch;
    var currentLowestDifference;

    // loop through friend object array
    for (var f = 0; f < friends.length; f++) {

      // setting totalDiff to 0, so it resets after each answer length
      var totalDiff = 0;

      // loops through user answers length
      for (var i = 0; i < userInfo.answers.length; i++) { 

        // equation to calculate absolute total difference between user and friend answers
        totalDiff += (Math.abs(parseInt(friends[f].answers[i]) - parseInt(userInfo.answers[i])));

      }
      
      // if statement to change variable values for bestMatch and currentLowestDifference to the values of a friend that is the least away from you
      if (currentLowestDifference == null || totalDiff < currentLowestDifference) {
        currentLowestDifference = totalDiff;
        bestMatch = friends[f];
      }
  
    }

    // pushes user info to the friend object array
    friends.push(userInfo);

    // sends bestMatch info to surveyHTML to populate modal
    res.json(bestMatch);
    });
    
}
