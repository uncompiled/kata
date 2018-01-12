const zip = require('../zip')

test('empty array should return empty array', () => {
  expect(zip([])).toEqual([])
})

test('single array should return identity', () => {
  expect(zip([[1]])).toEqual([[1]])
})

test('pairs should be correctly extracted', () => {
  expect(zip([[1, 'a'], [2, 'b']])).toEqual([[1, 2], ['a', 'b']])
})

test('example in readme should work', () => {
  let results = zip([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  let expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  expect(results).toEqual(expected)
})

test('unequal length arrays should work', () => {
  let results = zip([[1], [2, 3], [4, 5, 6]])
  let expected = [[1, 2, 4], [undefined, 3, 5], [undefined, undefined, 6]]
  expect(results).toEqual(expected)
})
