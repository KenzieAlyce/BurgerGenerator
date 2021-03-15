// Set up MySQL connection
var mysql = require("mysql");
var connection;

// else connect to local database
connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "Password1_",
database: "burgers"
});

// Make connection
connection.connect(function (err) {
  if (err) {
    console.error("\nError connecting: " + err.stack + "\n");
    return;
  }
  console.log("\nConnected as id " + connection.threadId + "\n");
});

// Export connection for our ORM to use.
module.exports = connection;