const responses = require('./responses')

module.exports.main = async (event, context) => {
  // context.callbackWaitsForEmptyEventLoop = false
  const { MSG } = process.env
  const payload = {
    message: MSG
  }
  return responses.success(payload)
}
