const path = require('path');
const example_data = require(path.join(__dirname, '../data.json'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetchest');

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

// // This function should save a repo or repos to the MongoDB
// let save = (err, newRecord) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Record Saved: ${newRecord}`)
//   }
// }

// module.exports.save = save;

// let newRecord = new Repo({
//   id: 345,
//   name: "testName",
//   full_name: "testFN",
//   owner_login: "testOLogin",
//   owner_html_url: "testHtml",
//   owner_avatar_url: "testAvatar",
//   stargazers_count:  47,
//   watchers_count: 124,
//   forks_count:  256,
// })

// let newRecord = new Repo({
//   id: record.id,
//   name: record.name,
//   full_name: record.full,
//   owner_login: record.owner.login,
//   owner_html_url: record.owner.html_url,
//   owner_avatar_url: record.owner.avatar_url,
//   stargazers_count: record.stargazers_count,
//   watchers_count: record.watchers_count,
//   forks_count: record.forks_count,
// });

// // simple test
// newRecord.save((err, newRecord) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newRecord);
//   }
// });

// let record = example_data[1];


let newRecordSet = example_data;

// const saveMap = (newRecordSet) => {
//   newRecordSet.forEach(record => {
//     console.log(record);
//     let newRecord = new Repo({
//       id: record.id,
//       name: record.name,
//       full_name: record.full,
//       owner_login: record.owner.login,
//       owner_html_url: record.owner.html_url,
//       owner_avatar_url: record.owner.avatar_url,
//       stargazers_count: record.stargazers_count,
//       watchers_count: record.watchers_count,
//       forks_count: record.forks_count,
//     });

//     newRecord.save((err, newRecord) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`Record Saved: ${newRecord}`) 
//       }
//     });
//   });
// }

const saveMap = (newRecordSet) => {
  let successfullyInsertedRecords = [];
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

    let successfullyInsertedRecord = newRecord.save((err, newRecord) => {
      if (err) {
        console.log(err);
      } else {
        console.log(newRecord)
      }
    });
  });
}

saveMap(example_data)
