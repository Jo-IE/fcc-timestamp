// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
require("dotenv").config()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
/*var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204*/


app.use(express.static("public"))
app.get("/app", function(req, res){
  res.sendFile(__dirname + "/views/index.html")

app.get("/:date_string?", function(req, res){
    var date = req.params.date_string;
  var time = parseInt(date, 10)
   var dateRegex = /\d{4}-\d{2}-\d{2}/
   var secRegex = /\d+/
  
  if (dateRegex.test(date)){
      var newDate = new Date(date);
      var unixTime = Number(newDate.getTime());
      var utcDate =   newDate.toUTCString();}
  
  else if(secRegex.test(time)){
    var newDate = new Date(time)
    var unixTime = Number(newDate.getTime());
      var utcDate =   newDate.toUTCString();
  }
   
    else if (typeof date === "undefined"){
      var newDate = new Date();
      var unixTime = Number(newDate.getTime());
      var utcDate =   newDate.toUTCString();
    }
  else{var unixTime = "null"; var utcDate = "Not a date"}
  
  
    
    res.json({"unix": unixTime, "utc": utcDate});
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});