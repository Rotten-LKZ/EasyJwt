
exports.encode = function(data) {
  if (typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  return Buffer.from(data).toString('base64');
}

exports.decode = function(str) {
  let a = Buffer.from(str, 'base64').toString();
  try {
    a = JSON.parse(a);
    return a;
  } catch (error) {
    return a;
  }
}
