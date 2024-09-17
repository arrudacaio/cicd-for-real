const { sum, multiply } = require('../src/index')

describe('unit tests', () => {
  it('sum', () => {
    expect(sum(2,3)).toBe(5)
  })

  it('multiply', () => {
    expect(multiply(2,3)).toBe(6)
  })
})
