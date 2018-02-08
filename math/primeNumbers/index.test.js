const primeSieve = require('../primeNumbers')

test('1 returns []', () => {
  expect(primeSieve(1)).toEqual([])
})

test('7 returns [2, 3, 5, 7]', () => {
  expect(primeSieve(7)).toEqual([2, 3, 5, 7])
})

test('first 25 numbers are correct', () => {
  let expected = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97
  ]
  expect(primeSieve(100)).toEqual(expected)
})
