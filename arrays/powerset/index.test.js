const subsets = require('../powerset')

test('powerset: empty set', () => {
  let array = []
  let results = subsets.powerset(array)
  let expected = [[]]
  expect(results).toEqual(expected)
})

test('powerset: single item', () => {
  let array = [1]
  let results = subsets.powerset(array)
  let expected = [[], [1]]
  expect(results).toEqual(expected)
})

test('powerset: multiple items', () => {
  let array = [1, 2, 2]
  let results = subsets.powerset(array).sort()
  let expected = [[], [1], [1, 2], [1, 2], [1, 2, 2], [2], [2], [2, 2]]
  expect(results).toEqual(expected)
})

test('iterative: empty set', () => {
  let array = []
  let results = subsets.iterative(array)
  let expected = [[]]
  expect(results).toEqual(expected)
})

test('iterative: single item', () => {
  let array = [1]
  let results = subsets.iterative(array)
  let expected = [[], [1]]
  expect(results).toEqual(expected)
})

test('iterative: multiple items', () => {
  let array = [1, 2, 2]
  let results = subsets.iterative(array).sort()
  let expected = [[], [1], [1, 2], [1, 2], [1, 2, 2], [2], [2], [2, 2]]
  expect(results).toEqual(expected)
})
