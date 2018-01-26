const permutationPalindrome = require('../permutationPalindrome')

test('civic is a palindrome', () => {
  expect(permutationPalindrome('civic')).toBe(true)
})

test('iiccv has a permutation which is a palindrome', () => {
  expect(permutationPalindrome('iiccv')).toBe(true)
})

test('civil is not a palindrome', () => {
  expect(permutationPalindrome('civil')).toBe(false)
})

test('livci does not have a permutation which is a palindrome', () => {
  expect(permutationPalindrome('livci')).toBe(false)
})
