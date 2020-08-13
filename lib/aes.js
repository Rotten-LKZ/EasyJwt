
'use strict';

const aes = require('crypto-js/aes');

exports.encryption = function(key, data) {
  if (typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  return aes.encrypt(data, key);
}

exports.decryption = function(key, data) {
  let a = aes.decrypt(data, key);
  try {
    a = JSON.parse(a);
    return a;
  } catch (error) {
    return a;
  }
}
