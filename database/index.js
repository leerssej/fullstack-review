const path = require('path');
const example_data = require(path.join(__dirname, '../data.json'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: { type: Number, index: true, unique: true },
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

let newRecordSet = example_data;

const saveRecords = (newRecordSet, callback) => {
  newRecordSet.forEach(record => {
    let newRecord = new Repo({
      id: record.id,
      name: record.name,
      full_name: record.full,
      owner_login: record.owner.login,
      owner_html_url: record.owner.html_url,
      owner_avatar_url: record.owner.avatar_url,
      stargazers_count: record.stargazers_count,
      watchers_count: record.watchers_count,
      forks_count: record.forks_count,
    });
    
    newRecord.save((err, newRecord) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Record Saved: ${newRecord}`)
        // callback(newRecord);
      }
    });
  });
}
// saveRecords(example_data);

const getTop25 = (callback) => {
  Repo
    .find({})
    .limit(25)
    .sort({stargazers_count: -1})
    .exec(callback)
}

// console.log(getTop25());
module.exports = {
  saveRecords,
  getTop25,
};