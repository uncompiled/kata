const waveArray = require('../waveArray')

test('empty array results in empty array', () => {
  expect(waveArray([])).toEqual([])
})

test('[1, 2, 3, 4, 5, 6] results in [2, 1, 4, 3, 6, 5]', () => {
  expect(waveArray([1, 2, 3, 4, 5, 6])).toEqual([2, 1, 4, 3, 6, 5])
})
