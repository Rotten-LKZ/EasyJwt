"use strict";

const aes = require('./lib/aes');
const base64 = require('./lib/base64');
const sha256 = require('crypto-js/sha256');


exports.encrypt = function(key, data = [], dataOptions = [], options = [], salt) {
  let header = base64.encode({'typ': 'JWT', 'alg': 'AES'});
  for(var i in dataOptions) {
    data.push(dataOptions[i]);
  }
  let payload = aes.encryption(key, data);
  let signature = sha256(header + payload + salt).toString();
  return header + '.' + payload + '.' + signature;
}

exports.decrypt = function(key, string, salt) {
  let jwts = string.split('.');

}
