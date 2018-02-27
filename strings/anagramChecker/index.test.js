const isAnagram = require('../anagramChecker')

test('matching strings are anagrams', () => {
  expect(isAnagram('foo', 'foo')).toEqual(true)
})

test('mismatched strings cannot be anagrams', () => {
  expect(isAnagram('foo', 'foobarbaz')).toEqual(false)
})

test('acres is an anagram of races', () => {
  expect(isAnagram('acres', 'races')).toEqual(true)
})

test('cat is not an anagram of dog', () => {
  expect(isAnagram('cat', 'dog')).toEqual(false)
})

test('case sensitivity check: CAT is an anagram of cat', () => {
  expect(isAnagram('CAT', 'cat')).toEqual(true)
})

test('multi-word anagrams are valid: 1', () => {
  expect(isAnagram('The eyes', 'They see')).toEqual(true)
})

test('multi-word anagrams are valid: 2', () => {
  expect(isAnagram('William Shakespeare', 'I am a weakish speller')).toEqual(
    true
  )
})

test('multi-word anagrams are valid: 3', () => {
  expect(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')).toEqual(true)
})

test('anagram check is an anagram of hacker nag cam', () => {
  expect(isAnagram('anagram check', 'hacker nag cam')).toEqual(true)
})
