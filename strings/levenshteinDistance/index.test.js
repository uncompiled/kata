const levenshtein = require('../levenshteinDistance')

test('recursive: equal strings return 0', () => {
  expect(levenshtein.recursive('hello', 'hello')).toEqual(0)
})

test('recursive: kitten and sitting return 3', () => {
  expect(levenshtein.recursive('kitten', 'sitting')).toEqual(3)
})

test('recursive: single deletion', () => {
  expect(levenshtein.recursive('asdf', 'sdf')).toEqual(1)
})

test('recursive: single insertion', () => {
  expect(levenshtein.recursive('sdf', 'asdf')).toEqual(1)
})

test('recursive: two deletions (ab), one substitution (c->d)', () => {
  expect(levenshtein.recursive('abc', 'd')).toEqual(3)
})

test('recursive: reversed string', () => {
  expect(levenshtein.recursive('abcdefg', 'gfedcba')).toEqual(6)
})

test('iterative: equal strings return 0', () => {
  expect(levenshtein.iterative('hello', 'hello')).toEqual(0)
})

test('iterative: kitten and sitting return 3', () => {
  expect(levenshtein.iterative('kitten', 'sitting')).toEqual(3)
})

test('iterative: single deletion', () => {
  expect(levenshtein.recursive('asdf', 'sdf')).toEqual(1)
})

test('iterative: single insertion', () => {
  expect(levenshtein.iterative('sdf', 'asdf')).toEqual(1)
})

test('iterative: two deletions (ab), one substitution (c->d)', () => {
  expect(levenshtein.iterative('abc', 'd')).toEqual(3)
})

test('iterative: reversed string', () => {
  expect(levenshtein.iterative('abcdefg', 'gfedcba')).toEqual(6)
})

test('iterative: reversed string', () => {
  let s1 = 'abcdefghijklmnopqrstuvwxyz'
  let s2 = s1
    .split('')
    .reverse()
    .join('')

  expect(levenshtein.iterative(s1, s2)).toEqual(26)
})
