const permutations = require('../permutations')

test('empty set', () => {
  let array = []
  let results = permutations(array)
  expect(results).toEqual([[]])
})

test('base case', () => {
  let array = [1]
  let results = permutations(array)
  expect(results).toEqual([[1]])
})

test('no duplicates permutations', () => {
  let array = [1, 1, 1]
  let results = permutations(array)
  expect(results).toEqual([[1, 1, 1]])
})

test('permutations of numbers', () => {
  let array = [1, 2, 3]
  let results = permutations(array)
  expect(results).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
  ])
})

test('permutations of a string', () => {
  let string = 'hey'
  let results = permutations(string.split(''))
  expect(results).toEqual([
    ['h', 'e', 'y'],
    ['h', 'y', 'e'],
    ['e', 'h', 'y'],
    ['e', 'y', 'h'],
    ['y', 'h', 'e'],
    ['y', 'e', 'h']
  ])
})
