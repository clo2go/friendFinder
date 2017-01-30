var path = require('path');
var bodyParser = require('body-parser');
var friendsList = require('../data/friends.js');

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function (req, res) {
    var user = req.body;
    var userIndex = 0;
    var diffArray = [];
    var inputScores = req.body.score;

    for (var i = 0; i < friendsList.length-1; i++) {
      var iteratedUser = friendsList[i].score;
      var totalDiff = 0;
      for (var j = 0; j < inputScores.length; j ++) {
        var sum = Math.abs(parseInt(inputScores[j]) - parseInt(iteratedUser[j]));
        totalDiff += sum;
      }
      diffArray.push(totalDiff);
    }
    function indexLowest(low) {
      var lowest = 0;
      for (var i = 1; i < low.length; i++) {
        if (low[i] < low[lowest]) {
          lowest = i;
        }
        return lowest;
      }
      var returnedIndex = indexLowest(diffArray);
    }
    res.json(friendsList[returnedIndex]);


  });
};
