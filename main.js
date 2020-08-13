"use strict";

const aes = require('./lib/aes');
const base64 = require('./lib/base64');
const sha256 = require('crypto-js/sha256');


exports.encrypt = function(key, data = [], dataOptions = [], options = [], salt, isNeedUrlEncode) {
  let header = base64.encode({'typ': 'JWT', 'alg': 'AES'}); // Header

  Object.assign(data, dataOptions); // Merge array and encryp AES
  let payload = aes.encryption(key, data);

  let signature = sha256(header + payload + salt).toString();

  if (isNeedUrlEncode) {
    return encodeURIComponent(header) + '.' + encodeURIComponent(payload) + '.' + signature;
  }
  return header + '.' + payload + '.' + signature;
}

exports.decrypt = function(key, string, salt, isNeedUrlEncode) {
  let jwts = string.split('.'); // jwts[0] is HEADER jwts[1] is PAYLOAD jwt[2] is SIGNATURE
  if (isNeedUrlEncode) { // DecodeURIComponent if need url encode
    jwts[0] = decodeURIComponent(jwts[0]);
    jwts[1] = decodeURIComponent(jwts[1]);
  }

  if (sha256(jwts[0] + jwts[1] + salt).toString() !== jwts[2]) return false;
  if (base64.decode(jwts[0]) !== {'typ': 'JWT', 'alg': 'AES'}) return false;

  let payload = aes.decryption(key, jwts[1]);

  try {
    payload = JSON.parse(payload);
  } catch {
    return false;
  }

  if (typeof(payload.nbf) !== "undefined") if (payload.nbf > (Date.now() / 1000)) return false; // Before this time the JWT is invaild
  if (typeof(payload.exp) !== "undefined") if (payload.exp <= (Date.now() / 1000)) return false; // After this time the JWT is invaild

  return payload;
}
