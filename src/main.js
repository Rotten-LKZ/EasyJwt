"use strict";

const aes = require('./lib/aes');
const base64 = require('./lib/base64');
const sha256 = require('crypto-js/sha256');

let salt = '1W6IjQPY0GBJpv';

exports.encrypt = function(key, data = [], dataOptions = [], options = []) {
  let header = base64.encode({'typ': 'JWT', 'alg': 'AES'});
  for(var i in dataOptions) {
    data.push(dataOptions[i]);
  }
  let payload = encodeURIComponent(aes.encryption(key, data));
  let signature = sha256(header + payload + salt);
  return header + '.' + payload + '.' + signature;
}

exports.decrypt = function(key, string) {

}
