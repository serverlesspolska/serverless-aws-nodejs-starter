const helper = require('./helper')

module.exports.main = (event, context, callback) => {
  const response = { message: helper('World') };
  callback(null, response)
}
