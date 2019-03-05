const responses = require('./responses')

// eslint-disable-next-line no-unused-vars
module.exports.main = async (event, context) => {
  // context.callbackWaitsForEmptyEventLoop = false
  const { MSG } = process.env
  const payload = {
    message: MSG
  }
  return responses.success(payload)
}
