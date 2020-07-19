
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

  this.encrypt = (data, dataOptions = [], options = []) => {
    main.encrypt(key, data, dataOptions, options);
  }

  this.decrypt = (string) => {
    main.decrypt(key, string);
  }
}

console.log(new init('test').encrypt({'test' : 'test'}));

// let initV = new init().isSupportCrypto ? init : false;
// module.exports = initV;
