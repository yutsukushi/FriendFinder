// might need possibly for modal popup
  app.get("/api/friends", function(req, res) {
      res.sendFile(path.join(__dirname, "reserve.html"));
    });
  
  // Create New reservertaion - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newRes);

    res.json(newRes);
    
});