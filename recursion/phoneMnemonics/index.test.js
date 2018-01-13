const mnemonics = require('../phoneMnemonics')

test('01 returns 01 because there are no other options', () => {
  expect(mnemonics('01')).toEqual(['01'])
})

test('2 has 3 results', () => {
  expect(mnemonics('2')).toEqual(['A', 'B', 'C'])
})

test('7 has 4 results', () => {
  expect(mnemonics('7')).toEqual(['P', 'Q', 'R', 'S'])
})

test('23 has 9 results', () => {
  let results = mnemonics('23')
  let expected = ['AD', 'AE', 'AF', 'BD', 'BE', 'BF', 'CD', 'CE', 'CF']

  // n=2, 3 choices for each, 3^2 combinations
  expect(results.length).toEqual(9)
  expect(results).toEqual(expected)
})

test('2629464 has AMAZING as a solution', () => {
  let results = mnemonics('2629464')

  expect(results.length).toEqual(2916)
  expect(results).toContain('AMAZING')
})
