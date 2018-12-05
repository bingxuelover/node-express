var express = require('express')
var app = express()
var fs = require('fs')

app.get('/', function(req, res) {
  console.log("Hello Express");
  console.log(process.env);
  res.sendFile(__dirname + "/public/index.html");
})

app.get('/root', function(req, res) {
  res.send("Hello Express")
})

app.get("/json", function(req, res) {
  res.json({"message": "Hello World"});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
