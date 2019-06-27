'use strict';

const http = require('http');

module.exports = function(url) {
  return new Promise(function(resolve, reject) {
    http
      .get(url, resp => {
        let data = '';
        resp.setEncoding('utf8');
        resp.on('data', chunk => {
          data += chunk;
        });
        resp.on('end', () => {
          resolve(JSON.parse(data));
        });
      })
      .on('error', err => {
        reject(err);
      });
  });
};
