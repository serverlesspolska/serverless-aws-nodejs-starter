const helper = require('./helper')

module.exports.main = async (event, context) => {
  const response = { message: helper('World') };
  return response
}
