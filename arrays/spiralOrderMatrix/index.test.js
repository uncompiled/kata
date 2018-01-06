const spiralOrderMatrix = require('../spiralOrderMatrix')

test('print single square', () => {
  const input = [[0]]
  expect(spiralOrderMatrix(input)).toEqual([0])
})

test('prints a matrix in spiral order', () => {
  const input = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
  expect(spiralOrderMatrix(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
