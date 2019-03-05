/**
 * @jest-environment node
 */

const LambdaTester = require('lambda-tester');
const handler = require('../lambda').main

describe('Lambda function One', () => {
  it('should work', () => {
    const event = {}
    return LambdaTester(handler)
      .event(event)
      .expectResolve((actual) => {
        expect(actual.message).toBe('Hello World!')
      })
  })
})
