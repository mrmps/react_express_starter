
const express = require('express');
const mysql = require('mysql');

var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        console.log(err);
    }
    console.log('MySql Connected...');
});



// Get Textarea Value
app.post('/api/sql-query-value', function (req, res) {
    var q = req.body.user.name;
    console.log(req.body.user.name);
    console.log(JSON.stringify(req.body));
    console.log("q is " + q);
    db.connect(function(err) {
        if (err) console.log(err);
        db.query(q, function (err, result, fields) {
          if (err) console.log(err);
            res.send(result)
            console.log(result)
        });
      });
});

app.get('/api/tables', (req, res) => {
    let sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_SCHEMA='nodemysql'";
    db.connect(function(err) {
        if (err) console.log(err);
        db.query(sql, function (err, result, fields) {
          if (err) console.log(err);
            console.log(result)
            res.json(result)
        });
      });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
