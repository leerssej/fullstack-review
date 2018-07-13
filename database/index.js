const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
  owner_login: String,
  owner_html_url: String,
  owner_avatar_url: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

// This function should save a repo or repos to the MongoDB
let save = (err, newRecord) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Record Saved: ${newRecord}`)
  }
}

module.exports.save = save;

let newRecord = new Repo({
  id: 123,
  name: "testName",
  full_name: "testFN",
  owner_login: "testOLogin",
  owner_html_url: "testHtml",
  owner_avatar_url: "testAvatar",
  stargazers_count:  5,
  watchers_count: 12,
  forks_count:  25,
})

newRecord.save();