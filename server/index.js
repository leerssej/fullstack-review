const path = require('path');
const express = require('express');
const $ = require('jquery');
let app = express();
const db = require(path.join(__dirname, '../database/index.js'))
// console.log(db)
// log activities
app.use(function (req, res, next) {
  console.log('Request Type, Url:', req.method, req.url)
  next();
})

// serve out the standard webpage
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
});

app.get('/repos', function (req, res, next) {
  // This route should send back the top 25 repos
  db.getTop25((e,s) => {
    if (e) {
      console.log(e);
    } else {
      res.send(null,s);
    }
  next();
  });
});

// app.get('/repos', function (req, res, next) {
//   // This route should send back the top 25 repos
//   console.log('ID:', req.params.id)
//   next()
// }, (req, res, next) => {
//   res.send(`req: ${JSON.stringify(req)}, res: ${JSON.stringify(res)}`);
// });

app.get('/most', function (req, res, next) {
  fetch('https://api.github.com/search/repositories?q=javascript:language&sort=stars&order=desc')
   .then((e,s) => console.log(e,s))
  next();
})
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

