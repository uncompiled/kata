const maxSumSubarray = require('../maxSumSubarray')

test('sum of empty array is undefined', () => {
  expect(maxSumSubarray([])).toBeUndefined()
})

test('sum of single number is that number', () => {
  expect(maxSumSubarray([100])).toEqual(100)
})

test('max sum of all negative numbers is the max', () => {
  let input = [-1, -2, -3, -4, -5, -6]

  expect(maxSumSubarray(input)).toEqual(-1)
})

test('max sum of all positive numbers is the sum of the whole array', () => {
  let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(maxSumSubarray(input)).toEqual(input.reduce((acc, x) => acc + x))
})

test('example works', () => {
  let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

  expect(maxSumSubarray(input)).toEqual(6)
})
