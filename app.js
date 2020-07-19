
const main = require('./main');

function init(key) {
  this.key = key;

  this.isSupportCrypto = () => {
    let crypto;
    try {
      crypto = require('crypto');
      return true;
    } catch (err) {
      return false;
    }
  }

  this.encrypt = (data) => {
    main.encrypt(key, data);
  }

  this.encrypt = (data, option) => {
    main.encrypt(key, data, option);
  }

  this.decrypt = (string) => {
    main.decrypt(key, string);
  }
}

let initV = new init().isSupportCrypto ? init : false;
module.exports = initV;
