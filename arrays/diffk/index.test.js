const diffk = require('../diffk')

test('empty array has no possible pairs', () => {
  expect(diffk([], 0)).toBe(false)
})

test('single value array has no possible pairs', () => {
  expect(diffk([1], 0)).toBe(false)
})

test('base case', () => {
  expect(diffk([5, 0], 5)).toBe(true)
  expect(diffk([1, 1], 0)).toBe(true)
  expect(diffk([1, 2], 1)).toBe(true)
})

test('example should work', () => {
  expect(diffk([1, 3, 5], 2)).toBe(true)
})
