const gcd = require('../gcd')

test('gcd(1, 2) is 1', () => {
  expect(gcd(1, 2)).toEqual(1)
})

test('gcd(0, 2) is 2', () => {
  expect(gcd(0, 2)).toEqual(2)
})

test('gcd(3, 9) is 3', () => {
  expect(gcd(3, 9)).toEqual(3)
})

test('gcd(8, 12) is 4', () => {
  expect(gcd(8, 12)).toEqual(4)
})
