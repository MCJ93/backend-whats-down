const http = require('http');
const url = require("url"); 
// var querystring = require('querystring'); //Divides query params
// var EventEmitter = require("events").EventEmitter; //Allow emitting events


const server = http.createServer();  
server.on("request", function(request, response) { //Created on request
  console.log(request); 
  const { method, url } = request;
  console.log(method);
  console.log(url);
  // var page = url.parse(req.url).pathname; //parse req to get requested url page
  // console.log(page); //log in nodeJS console (not in browser)
  // var query = url.parse(req.url).query; //get query params
  // var params = querystring.parse(url.parse(req.url).query); //get query params eg. params["firstName"]
  // console.log(query);
  // res.writeHead(200, {"Content-Type": "text/html"}); //Header - have to be placed BEFORE res.write();
  // if (page == "/") {
  //   res.write("HOme");  
  // } else {
  //   res.write("Not home");
  // }
  res.end();  //Always have to end a response.
});

server.on("close", function() { //event listener
  console.log("On close");
})

server.listen(8080);

// var EventEmitter = require('events').EventEmitter; //create event
// var game = new EventEmitter();

// game.on('gameover', function(message){  //event listener
//     console.log(message);
// });
// game.emit('gameover', 'You lose!');

// game.emit('newplayer', 'Mario', 35); // Sends the name of a new player who’s just arrived and gives their age