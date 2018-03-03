const hasRedundantBraces = require('../redundantBraces')

test('empty braces are redundant', () => {
  expect(hasRedundantBraces('()')).toEqual(true)
})

test('(a) has redundant braces', () => {
  expect(hasRedundantBraces('(a)')).toEqual(true)
})

test('(a + b) has no redundant braces', () => {
  expect(hasRedundantBraces('(a + b)')).toEqual(false)
})
