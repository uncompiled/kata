const longestSubstringWithoutRepeat = require('../longestSubstringWithoutRepeat')

test('bbbbb has longest substring of length 1', () => {
  let input = 'bbbbb'
  let expected = 1

  expect(longestSubstringWithoutRepeat(input)).toEqual(expected)
})

test('abcabcbb has longest substring of length 3', () => {
  let input = 'abcabcbb'
  let expected = 3

  expect(longestSubstringWithoutRepeat(input)).toEqual(expected)
})
