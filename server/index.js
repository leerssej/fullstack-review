const express = require('express');
let app = express();

// serve out the standard webpage
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
});

app.get('/repos', function (req, res, next) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('There is an answer on the GET door when knocked')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

