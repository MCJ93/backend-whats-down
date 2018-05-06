const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  plugin: auth_socket,
  authenticationString: "test",
  database: "whats_down",
  insecureAuth : true
});
module.exports = {
  connect: function() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }
};
