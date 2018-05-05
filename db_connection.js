const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Speoklatvet1_ML",
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
