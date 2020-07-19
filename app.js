
const main = require('./main');

/**
 * Initialize
 * @param {String} key 
 * @param {String} salt 
 * @param {Boolean} isNeedUrlEncode
 * @returns {initRes} 
 */
function init(key, salt, isNeedUrlEncode) {
  this.key = key;
  this.salt = salt;
  this.isNeedUrlEncode = isNeedUrlEncode;

  /**
   * Encrypt Jwt String
   * @param {Object} data 
   * @param {Object} dataOptions 
   * @param {Object} options 
   */
  this.encrypt = (data, dataOptions = [], options = []) => {
    return main.encrypt(this.key, data, dataOptions, options, this.salt, this.isNeedUrlEncode);
  }

  /**
   * Decrypt Jwt String
   * @param {String} string 
   */
  this.decrypt = (string) => {
    return main.decrypt(this.key, string, this.salt, this.isNeedUrlEncode);
  }
}

/**
 * 
 * @param {opt} opt Must Options: key, salt, isNeedUrlEncode
 * @param {Object} data 
 * @param {Object} dataOptions 
 * @param {Object} options 
 */
function encrypt(opt, data, dataOptions = [], options = []) {
  return main.encrypt(opt[0], data, dataOptions, options, opt[1], opt[2]);
}

/**
 * 
 * @param {opt} opt Must Options: key, salt, isNeedUrlEncode
 * @param {String} string 
 */
function decrypt(opt, string) {
  return main.decrypt(opt[0], string, opt[1], opt[2]);
}

module.exports = {
  easyJwt: init,
  encrypt: encrypt,
  decrypt: decrypt
};
