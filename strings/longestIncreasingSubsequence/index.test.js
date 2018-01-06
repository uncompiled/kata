const lis = require('../longestIncreasingSubsequence')

test('invalid input returns 0', () => {
  expect(lis(null)).toEqual(0)
  expect(lis(undefined)).toEqual(0)
})

test('longest increasing substring for an empty collection is 0', () => {
  expect(lis([])).toEqual(0)
})

test('length is 1 when all the numbers are the same', () => {
  expect(lis([1, 1, 1, 1, 1, 1, 1, 1])).toEqual(1)
})

test('length is 1 when all the sequence is decreasing', () => {
  expect(lis([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(1)
})

test('length is array.length when the sequence is strictly increasing', () => {
  expect(lis([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(9)
})

test('the longest increasing substring for an empty string is 0', () => {
  let input = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
  let expected = 6

  expect(lis(input)).toEqual(expected)
})
