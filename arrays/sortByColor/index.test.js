const sortByColor = require('../sortByColor')

test('empty array is empty', () => {
  expect(sortByColor([])).toEqual([])
})

test('single element results in identity', () => {
  expect(sortByColor(['red'])).toEqual(['red'])
  expect(sortByColor(['white'])).toEqual(['white'])
  expect(sortByColor(['blue'])).toEqual(['blue'])
})

test('example works', () => {
  let input = ['red', 'white', 'blue', 'red', 'white', 'blue']
  let expected = ['red', 'red', 'white', 'white', 'blue', 'blue']

  expect(sortByColor(input)).toEqual(expected)
})
