const rotate = require('../rotateMatrix')

test('empty matrix', () => {
  let input = [[]]
  let expected = [[]]
  expect(rotate(input)).toEqual(expected)
})

test('1x1 matrix', () => {
  let input = [[1]]
  let expected = [[1]]
  expect(rotate(input)).toEqual(expected)
})

test('2x2 matrix', () => {
  let input = [[1, 2], [3, 4]]
  let expected = [[3, 1], [4, 2]]
  expect(rotate(input)).toEqual(expected)
})

test('3x3 matrix', () => {
  let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  let expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
  expect(rotate(input)).toEqual(expected)
})
