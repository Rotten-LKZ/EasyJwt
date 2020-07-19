
exports.encode = function(data) {
  if (typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  return Buffer.from(data).toString('base64');
}

exports.decode = function(str) {
  return Buffer.from(str, 'base64').toString();
}
