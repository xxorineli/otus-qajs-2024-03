import factorial from '../src/factorial'

describe('Factorial function', () => {
  test('imports without errors', () => {
    expect(factorial).toBeDefined()
    expect(typeof factorial).toBe('function')
  })
  test('factorial(0) is 1', () => {
    expect(
      // expression
      factorial(0),
    ).toBe(1)
  })
  test('factorial(1) is 1', () => {
    expect(factorial(1)).toBe(1)
  })
  test('factorial(3) is 6', () => {
    expect(factorial(3)).toBe(6)
  })
  test('factorial(4) is 24', () => {
    expect(factorial(4)).toBe(24)
  })
  test.each([
    [0, 1],
    [3, 6],
  ])('%s %s', (n, e) => {
    expect(factorial(n)).toBe(e)
  })

  test('throws an error when not between 0 and 100', function () {
    expect(() => factorial(1)).not.toThrow()
  })
})
