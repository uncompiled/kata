const uniquePaths = require('../uniquePaths')

test('there is no path to the end', () => {
  let grid = [[1]]
  expect(uniquePaths(grid)).toEqual(0)
})

test('1x1 grid only has 1 path to the end', () => {
  let grid = [[0]]
  expect(uniquePaths(grid)).toEqual(1)
})

test('3x3 grid has 6 paths to the end', () => {
  let grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  expect(uniquePaths(grid)).toEqual(6)
})

test('3x3 grid has 2 paths to the end', () => {
  let grid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
  expect(uniquePaths(grid)).toEqual(2)
})

test('3x3 grid has 3 paths to the end', () => {
  let grid = [[0, 1, 0], [0, 0, 0], [0, 0, 0]]
  expect(uniquePaths(grid)).toEqual(3)
})
