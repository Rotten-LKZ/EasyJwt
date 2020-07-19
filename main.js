"use strict";

const aes = require('./lib/aes');
const base64 = require('./lib/base64');
const sha256 = require('crypto-js/sha256');


exports.encrypt = function(key, data = [], dataOptions = [], options = [], salt, isNeedUrlEncode) {
  let header = base64.encode({'typ': 'JWT', 'alg': 'AES'});
  for(var i in dataOptions) {
    data.push(dataOptions[i]);
  }
  let payload = aes.encryption(key, data);
  let signature = sha256(header + payload + salt).toString();
  if (isNeedUrlEncode) {
    return encodeURIComponent(header) + '.' + encodeURIComponent(payload) + '.' + signature;
  }
  return header + '.' + payload + '.' + signature;
}

exports.decrypt = function(key, string, salt, isNeedUrlEncode) {
  let jwts = string.split('.');
  if (isNeedUrlEncode) {
    jwts[0] = decodeURIComponent(jwts[0]);
    jwts[1] = decodeURIComponent(jwts[1]);
  }
}
