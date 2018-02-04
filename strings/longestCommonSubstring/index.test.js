const lcs = require('../longestCommonSubstring')

test('two completely different strings have nothing in common', () => {
  expect(lcs('ABC', 'XYZ')).toHaveLength(0)
})

test('identical strings return the entire string', () => {
  let input = 'The quick brown fox jumps over the lazy dog'
  let result = lcs(input, input)
  expect(result).toHaveLength(1)
  expect(result).toContain(input)
})

test('foobarbaz and bar match on bar', () => {
  expect(lcs('foobarbaz', 'bar')).toContain('bar')
})

test('ABABC and ABCBA have ABC in common', () => {
  expect(lcs('ABABC', 'ABCBA')).toContain('ABC')
})

test('foofoobarfoo and foo match multiple times', () => {
  let result = lcs('foofoobarfoo', 'foo')
  expect(result).toHaveLength(3)
  expect(result).toContain('foo')
})
