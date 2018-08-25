const LambdaTester = require('lambda-tester');
const handler = require('../fnSampleOne').main

describe('Lambda function One', () => {
  it('should work', () => {
    const event = {}
    return LambdaTester(handler)
      .event(event)
      .expectResult((r) => {
        expect(r.message).toBe('Hello World!')
      })
  })
})
