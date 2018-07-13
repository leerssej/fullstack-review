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
  updated: { type: Date, default: Date.now },
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;