const pascalTriangle = require('../pascalTriangle')

test('single row', () => {
  expect(pascalTriangle(1)).toEqual([[1]])
})

test('two rows', () => {
  expect(pascalTriangle(2)).toEqual([[1], [1, 1]])
})

test('three rows', () => {
  expect(pascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]])
})

test('four rows', () => {
  expect(pascalTriangle(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]])
})

test('five rows', () => {
  expect(pascalTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ])
})

test('ten rows', () => {
  expect(pascalTriangle(10)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1],
    [1, 7, 21, 35, 35, 21, 7, 1],
    [1, 8, 28, 56, 70, 56, 28, 8, 1],
    [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
  ])
})
