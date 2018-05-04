const http = require('http');
const bodyParser = require("body-parser");
const user = require("./user.js");

const server = http.createServer();

server.on('request', (request, response) => {
  let jsonString = "";
  console.log("reqest");
  request.on('data', function (chunk) {
    jsonString += chunk;
  });
  request.on('end', function () {
    const body = JSON.parse(jsonString);
    if (body.type === "login") {
      console.log(user);
      return user.checkLogin(body.login, body.password);
    }
  })
});

server.listen(3000);
