const reMatch = require('../reMatch')

test('a only matches a', () => {
  let pattern = 'a'
  expect(reMatch(pattern, 'a')).toEqual(true)
  expect(reMatch(pattern, 'b')).toEqual(false)
})

test('aa only matches aa', () => {
  let pattern = 'aa'
  expect(reMatch(pattern, 'aa')).toEqual(true)
  expect(reMatch(pattern, 'aaa')).toEqual(false)
})

test('a* matches any number of a', () => {
  let pattern = 'a*'
  expect(reMatch(pattern, '')).toEqual(true)
  expect(reMatch(pattern, 'a')).toEqual(true)
  expect(reMatch(pattern, 'aa')).toEqual(true)
  expect(reMatch(pattern, 'aaa')).toEqual(true)
  expect(reMatch(pattern, 'aaaa')).toEqual(true)
  expect(reMatch(pattern, 'aaaab')).toEqual(false)
})

test('.* matches any number of any character', () => {
  let pattern = '.*'
  expect(reMatch(pattern, '')).toEqual(true)
  expect(reMatch(pattern, 'abc')).toEqual(true)
  expect(reMatch(pattern, 'xyz')).toEqual(true)
})

test('a*b*c matches any number of a, then any number of b, then one c', () => {
  let pattern = 'a*b*c'
  expect(reMatch(pattern, 'c')).toEqual(true)
  expect(reMatch(pattern, 'bc')).toEqual(true)
  expect(reMatch(pattern, 'ac')).toEqual(true)
  expect(reMatch(pattern, 'abc')).toEqual(true)
  expect(reMatch(pattern, 'aabbc')).toEqual(true)
  expect(reMatch(pattern, 'aabbcc')).toEqual(false)
})

test('ab*c matches one a, then any number of b, then one c', () => {
  let pattern = 'ab*c'
  expect(reMatch(pattern, 'ac')).toEqual(true)
  expect(reMatch(pattern, 'abc')).toEqual(true)
  expect(reMatch(pattern, 'abbc')).toEqual(true)
  expect(reMatch(pattern, 'abbbc')).toEqual(true)
})
