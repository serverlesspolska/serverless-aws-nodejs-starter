const responses = require('./responses')

module.exports.main = async (event, context, callback) => {
  // context.callbackWaitsForEmptyEventLoop = false
  const { MSG } = process.env
  const payload = {
    message: MSG
  }
  callback(null, responses.success(payload));
}
