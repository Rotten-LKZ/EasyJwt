
const main = require('./main');

function init(key) {
  this.key = key;

  this.encrypt = (data, dataOptions = [], options = []) => {
    return main.encrypt(key, data, dataOptions, options);
  }

  this.decrypt = (string) => {
    return main.decrypt(key, string);
  }
}

console.log(new init('test').encrypt({'test' : 'test'}));

// module.exports = init;
