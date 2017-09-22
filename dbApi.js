var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

app.get("/getStudents",function(req,res){
connection.query('SELECT * from students', function(err, rows, fields) {
  if (!err)
    {
      console.log(rows[0]);
    }
  else
    console.log('Error while performing Query.');
  res.json(rows[0]);
  });
});

app.listen(3000,function(){
  console.log('listening at port: 3000');
});
