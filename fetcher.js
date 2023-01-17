const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const writeToFile = (filepath, data) => {
  fs.writeFile(filepath, data, err => {
    fs.stat(filepath, (err, stats) => {
      console.log(`Downloaded and saved ${stats.size} bytes to ${filepath}`);
    });
  });
};

const fetcher = function(url, filepath) {
  request(url, (error, response, body) => {
    if (response === undefined) {
      console.log("url does not exist");
      return;
    }
    return writeToFile(filepath, body);
  });
};

fetcher(...args);