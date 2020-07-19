
exports.encode = function(data) {
  if (typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  return encodeURIComponent(new Buffer(data).toString('base64'));
}

exports.decode = function(str) {
  return new Buffer(decodeURIComponent(str), 'base64').toString();
}
