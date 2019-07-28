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

    for (var f = 0; f < friends.length; f++) {

      var totalDiff = 0;

      for (var i = 0; i < userInfo.answers.length; i++) { 

        totalDiff += (Math.abs(parseInt(friends[f].answers[i]) - parseInt(userInfo.answers[i])));

        console.log(totalDiff);
        console.log(friends[f].name);

      }
      
      if (currentLowestDifference == null || totalDiff < currentLowestDifference) {
        currentLowestDifference = totalDiff;
        bestMatch = friends[f];
      }
  
    }

    friends.push(userInfo);

    res.json(bestMatch);
    });
    
}
