
const main = require('./main');

function init(key, salt, isNeedUrlEncode) {
  this.key = key;

  this.encrypt = (data, dataOptions = [], options = []) => {
    return main.encrypt(key, data, dataOptions, options, salt);
  }

  this.decrypt = (string) => {
    return main.decrypt(key, string, salt);
  }
}

module.exports = init;
