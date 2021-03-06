var express = require("express");
var app     = express();

var path    = require("path");


app.get('/',function(req,res){
  // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  // res.header('Expires', '-1');
  // res.header('Pragma', 'no-cache');

  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});



app.listen(3000);

console.log("Running at Port 3000");