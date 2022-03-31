const octokit = require('@octokit/rest')();
const Configstore = require('configstore');
const _ = require('lodash');

const pkg = require('../package.json');
const conf = new Configstore(pkg.name);

module.exports = {
    getInstance: () => {
        return octokit
    },
    //if deprecation notice check out https://octokit.github.io
    gitHubAuth: (token) => {
        octokit.authenticate({
            type: "oauth",
            token,
        })
    },
    getStoredGitHubToken: () => {
        return conf.get('github_credentials.token')
    },
    setGitHubCredentials: async () => {
       
    },
}