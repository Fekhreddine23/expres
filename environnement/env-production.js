const { readFileSync } = require("fs");
const { resolve } = require("path");

module.exports = {
  port: {
    http: 80,
    https: 443,
  },
  ssl: {
    cert: readFileSync(resolve('ssl', 'dwaps.crt')),
    key: readFileSync(resolve('ssl', 'dwaps.key')),
  }
};