const path = require('path');
const express = require('express');
let app = express();
const db = require(path.join(__dirname, '../database/index.js'));
const ghq = require(path.join(__dirname, '../helpers/github.js'));
const bodyParser = require('body-parser');
console.log('------------------start---------------------------');

// log activities
app.use(function (req, res, next) {
  console.log('Request Type, Url:', req.method, req.url)
  next();
})

// serve out the standard webpage
app.use(express.static(__dirname + '/../client/dist'));

// install body parser
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  console.log(req.body.term, ghq, db);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  ghq.getReposByUsername(req.body.term, (errApiCall, freshData) => {
    db.saveRecords(freshData, (errStorage, storedData) => {
      if (errStorage) {
        console.log("error in storage");
      } else {
        res.send(StoredData);
      }
    })
  })
});

app.get('/repos', function (req, res, next) {
  // This route should send back the top 25 repos
  db.getTop25((e,s) => res.send(s))
});

// app.get('/repos', function (req, res, next) {
//   // This route should send back the top 25 repos
//   console.log('ID:', req.params.id)
//   next()
// }, (req, res, next) => {
//   res.send(`req: ${JSON.stringify(req)}, res: ${JSON.stringify(res)}`);
// });

// app.get('/most', function (req, res, next) {
//   fetch('https://api.github.com/search/repositories?q=javascript:language&sort=stars&order=desc').then((result) => console.log(result))
//   // .catch(err => console.log("error"))
// })

// app.get('/most', function (req, res, next) {
//   console.log(JSON.stringify($));
//   // $.get('https://api.github.com/search/repositories?q=javascript:language&sort=stars&order=desc', (e,s) => console.log(e,s))
// })

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

