const request = require('request');
const config = require('../config.js');

let getReposByUsername = (repoName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${repoName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
      console.log(info.forks_count + " Forks");
    }
  };

  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;

// curl https://api.github.com/search/repositories?q=stars:>70000&order=desc

// getReposByUsername('leerssej')

exports.getReposByUsername = getReposByUsername;