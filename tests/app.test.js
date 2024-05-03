import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('nameIsValid function', () => {
  it('should return true for a valid name', () => {
    const result = nameIsValid('john')
    expect(result).toBe(true)
  })

  it('should return false for a name with less than 2 characters', () => {
    const result = nameIsValid('j')
    expect(result).toBe(false)
  })

  it('should return false for a name with invalid characters', () => {
    const result = nameIsValid('john3')
    expect(result).toBe(false)
  })
})

describe('fullTrim function', () => {
  test('removes all spaces from a string with spaces', () => {
    const input = '  Hello  World  '
    const expected = 'HelloWorld'
    expect(fullTrim(input)).toBe(expected)
  })

  test('returns an empty string when input is null or undefined', () => {
    const input = null
    expect(fullTrim(input)).toBe('')
  })

  test('returns the original string if there are no spaces', () => {
    const input = 'HelloWorld'
    expect(fullTrim(input)).toBe(input)
  })
})

describe('getTotal', () => {
  test.each([
    // [items, discount, expected]
    [[{ price: 10, quantity: 10 }], 0, 100],
    [[{ price: 10, quantity: 1 }], 0, 10],
    [
      [
        { price: 10, quantity: 1 },
        { price: 10, quantity: 9 },
      ],
      0,
      100,
    ],
    [[{ price: 10, quantity: 10 }], 10, 90],
    [[{ price: 10, quantity: 10 }], 100, 0],
    [
      [{ price: 10, quantity: 10 }],
      -10,
      'Процент скидки не может быть отрицательным',
    ],
    [
      [{ price: 10, quantity: 10 }],
      101,
      'Процент скидки не может быть больше 100',
    ],
    [[{ price: 10, quantity: 10 }], 'ten', 'Скидка должна быть числом'],
  ])(
    'given items %p with discount %p, returns %p',
    (items, discount, expected) => {
      if (typeof expected === 'number') {
        expect(getTotal(items, discount)).toBe(expected)
      } else {
        expect(() => getTotal(items, discount)).toThrow(expected)
      }
    },
  )

  test.each([
    // [items, discount, expectedTotal]
    [[{ price: 10, quantity: 10 }], 0, 100],
    [
      [
        { price: 10, quantity: 1 },
        { price: 10, quantity: 9 },
      ],
      0,
      100,
    ],
    [[{ price: 10, quantity: 10 }], 10, 90],
  ])(
    'calculates the total price for items %j with discount %i',
    (items, discount, expectedTotal) => {
      expect(getTotal(items, discount)).toBe(expectedTotal)
    },
  )

  test.each([
    // [items, discount, expectedError]
    [[{ price: 10, quantity: 10 }], 'five', /Скидка должна быть числом/],
    [
      [{ price: 10, quantity: 10 }],
      -5,
      /Процент скидки не может быть отрицательным/,
    ],
    [
      [{ price: 10, quantity: 10 }],
      105,
      /Процент скидки не может быть больше 100/,
    ],
  ])(
    'throws an error when invalid discount %i is provided for items %j',
    (items, discount, expectedError) => {
      expect(() => getTotal(items, discount)).toThrow(expectedError)
    },
  )
})
