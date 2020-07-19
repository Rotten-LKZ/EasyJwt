/**
 * This code from https://blog.csdn.net/adley_app/article/details/81745681
 * Copyright AdleyTales(https://blog.csdn.net/adley_app)  CC 4.0 BY-SA
 * I will edit it and use it
 * I will delete this code if it infringes
 */

'use strict';
const crypto = require('crypto');
const AES = require('crypto-js/aes');

/**
 * AES加密的配置 
 * 1.密钥 
 * 2.偏移向量 
 * 3.算法模式CBC 
 * 4.补全值
 */
var AES_conf = {
  key: getSecretKey(), //密钥
  iv: '1012132405963708', //偏移向量
  padding: 'PKCS7Padding' //补全值
}

/**
 * 读取密钥key
 * 更具当前客户端的版本vid、平台platform获取对应的key
 */
function getSecretKey(){
    return "abcdabcdabcdabcd";
}

/**
 * AES_128_CBC 加密 
 * 128位 
 * return base64
 */
exports.encryption = function(key, data) {
  // let key = AES_conf.key;4
  // let key = key;
  let iv = AES_conf.iv;
  // let padding = AES_conf.padding;

  var cipherChunks = [];
  var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  cipher.setAutoPadding(true);
  cipherChunks.push(cipher.update(data, 'utf8', 'base64'));
  cipherChunks.push(cipher.final('base64'));
  return cipherChunks.join('');
}

/**
 * 解密
 * return utf8
 */
exports.decryption = function(key, data){
  // let key = AES_conf.key;
  // let key = key;
  let iv = AES_conf.iv;
  // let padding = AES_conf.padding;

  var cipherChunks = [];
  var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  decipher.setAutoPadding(true);
  cipherChunks.push(decipher.update(data, 'base64', 'utf8'));
  cipherChunks.push(decipher.final('utf8'));
  return cipherChunks.join('');
}
