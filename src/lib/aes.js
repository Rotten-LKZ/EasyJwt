
'use strict';

const aes = require('crypto-js/aes');

exports.encryption = function(key, data) {
  if (typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  return encodeURIComponent(aes.encrypt(data, key));
}

exports.decryption = function(key, data) {
  return aes.decrypt(decodeURIComponent(data), key);
}
