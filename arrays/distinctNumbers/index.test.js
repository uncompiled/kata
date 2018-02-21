const distinctNumbers = require('../distinctNumbers')

test('[1, 1, 1] and 1 should result in [1, 1, 1]', () => {
  let list = [1, 1, 1]
  let k = 1
  let expected = [1, 1, 1]

  expect(distinctNumbers(list, k)).toEqual(expected)
})

test('[1, 1, 1] and 3 should result in [1]', () => {
  let list = [1, 1, 1]
  let k = 3
  let expected = [1]

  expect(distinctNumbers(list, k)).toEqual(expected)
})

test('[1, 1, 1] and 4 should result in []', () => {
  let list = [1, 1, 1]
  let k = 4
  let expected = []

  expect(distinctNumbers(list, k)).toEqual(expected)
})

test('[1, 2, 1, 3, 4, 3] and 3 should result in [2, 3, 3, 2]', () => {
  let list = [1, 2, 1, 3, 4, 3]
  let k = 3
  let expected = [2, 3, 3, 2]

  expect(distinctNumbers(list, k)).toEqual(expected)
})
