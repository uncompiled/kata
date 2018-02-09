const towerOfHanoi = require('../towerOfHanoi')

test('no disks can be solve in no moves', () => {
  expect(towerOfHanoi(0)).toEqual([])
})

test('single disk can be solved in one move', () => {
  expect(towerOfHanoi(1)).toEqual([[0, 1]])
})

test('two disks can be solved in 3 moves', () => {
  let expected = [[0, 2], [0, 1], [2, 1]]
  expect(towerOfHanoi(2)).toEqual(expected)
})

test('three disks can be solved in 7 moves', () => {
  let expected = [[0, 1], [0, 2], [1, 2], [0, 1], [2, 0], [2, 1], [0, 1]]
  expect(towerOfHanoi(3)).toEqual(expected)
})
