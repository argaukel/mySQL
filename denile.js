var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "denile"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    console.log(res[0]);
    console.log("Name of item 0:",res[0].product_name)
    // connection.end();
    start();
  });
}

function start() {
  inquirer.prompt(

    {
      type: "input",
      name: "userPick",
      message: "What ID are you buying?"
    }).then(function(answer){
      console.log(answer.userPick)
    });
  } 