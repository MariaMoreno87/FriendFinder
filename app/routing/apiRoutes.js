// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
var path = require('path');

 //ROUTING

 module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

   //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};


var friendList = require('../data/friend.js');

 module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

   app.post('/api/friends', function(req,res){
    friendList.push(req.body);
  });
}; 