const countBits = require('../countBits')

test('0 has no `1` bits', () => {
  expect(countBits(0)).toEqual(0)
})

test('1 has a single `1` bit', () => {
  expect(countBits(1)).toEqual(1)
})

test('2 has a single `1` bit', () => {
  expect(countBits(2)).toEqual(1)
})

test('3 has two `1` bits', () => {
  // decimal(3) => binary(11)
  expect(countBits(3)).toEqual(2)
})

test('11 has three `1` bits', () => {
  // decimal(11) => binary(1011)
  expect(countBits(11)).toEqual(3)
})
