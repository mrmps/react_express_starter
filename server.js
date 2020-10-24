
const express = require('express');
const mysql = require('mysql');

var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Create connection
const db = mysql.createConnection({
    // waitForConnections : true,
    host     : 'remotemysql.com',
    user     : 'uSGzf6HhTQ',
    password : 'Y9Kf5kk7tv',
    database : 'uSGzf6HhTQ',
    port     : 3306
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
    var idea_post = req.body.user.name;
    var q = `INSERT INTO Ideas (id, likes, CONTENT, flags)
    VALUES (0, 0, '${idea_post}', 0);`
    console.log(req.body.user.name);
    console.log(JSON.stringify(req.body));
    console.log("q is " + q);
    // db.connect(function(err) {
    //     if (err) console.log(err);
    db.query(q, function (err, result, fields) {
      if (err) console.log(err);
        res.send(idea_post)
        console.log(result)
    });
  //  });
});

app.post('/api/increment-likes', function (req, res) {
  var id = req.body.id;
  console.log(q)
  var q = `UPDATE Ideas SET likes = likes + 1 WHERE id = ${id};`
  console.log('id to be posted is',req.body);
  console.log(JSON.stringify(req.body.id));
  console.log("q is " + q);
  // db.connect(function(err) {
  //     if (err) console.log(err);
  db.query(q, function (err, result, fields) {
    if (err) console.log(err);
      // res.send(id)
      console.log(result)
  });
//  });
});


app.post('/api/decrement-likes', function (req, res) {
  var id = req.body.id;
  console.log(q)
  var q = `UPDATE Ideas SET likes = likes - 1 WHERE id = ${id};`
  console.log('id to be posted is',req.body);
  console.log(JSON.stringify(req.body.id));
  console.log("q is " + q);
  // db.connect(function(err) {
  //     if (err) console.log(err);
  db.query(q, function (err, result, fields) {
    if (err) console.log(err);
      // res.send(id)
      console.log(result)
  });
//  });
});


app.get('/api/tables', (req, res) => {
  let sql = "SELECT * FROM Ideas";
  // db.connect(function(err) {
  //     if (err) console.log(err);
  db.query(sql, function (err, result, fields) {
    if (err) console.log(err);
      console.log('result', result)
      res.json(result)
  });
    // });
});



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
