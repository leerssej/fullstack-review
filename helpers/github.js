const request = require('request');
const config = require('../config.js');

let getReposByUsername = (repoName, callback) => {
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
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;

// curl https://api.github.com/search/repositories?q=stars:>70000&order=desc

// getReposByUsername('leerssej', (e,s) => console.log(e,s));
