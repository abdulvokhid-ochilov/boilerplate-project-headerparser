// server.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();
const ip = require("ip");


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
app.set('trust proxy', true);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  const address = ip.address();
  const software = req.headers["user-agent"];
  const language = req.headers["accept-language"];
  
  res.json({
    "ipaddress": address,
    "language": language,
    "software": software, 
  })
})



// listen for requests :)
const listener = app.listen(process.env.PORT||3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
