module.exports.main = (event, context, callback) => {
  const response = { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  callback(null, response)
}
