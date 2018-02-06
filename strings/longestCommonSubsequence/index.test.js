const lcs = require('../longestCommonSubsequence')

test('LCS of ABC and AZBC should be ABC', () => {
  expect(lcs('ABC', 'ATBC')).toEqual(3)
})

test('LCS of KATANA and BANANA should be AANA', () => {
  expect(lcs('KATANA', 'BANANA')).toEqual(4)
})
