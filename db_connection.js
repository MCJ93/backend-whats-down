const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "macjej",
  password: "Speoklatvet1_ML",
  database: "whats_down",
  socketPath: "/var/lib/mysql/mysql.sock"
});
module.exports = {
  connect: function() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }
};
