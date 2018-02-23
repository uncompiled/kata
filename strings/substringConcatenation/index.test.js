const substringConcatenation = require('../substringConcatenation')

test('empty string returns []', () => {
  let string = ''
  let list = ['foo', 'bar']
  let expected = []

  expect(substringConcatenation(string, list)).toEqual(expected)
})

test('empty list returns []', () => {
  let string = 'barfoothefoobarman'
  let list = []
  let expected = []

  expect(substringConcatenation(string, list)).toEqual(expected)
})

test('foobar returns [0]', () => {
  let string = 'foobar'
  let list = ['foo', 'bar']
  let expected = [0]

  expect(substringConcatenation(string, list)).toEqual(expected)
})

test('barfoothefoobarman and ["foo", "bar"] returns [0, 9]', () => {
  let string = 'barfoothefoobarman'
  let list = ['foo', 'bar']
  let expected = [0, 9]

  expect(substringConcatenation(string, list)).toEqual(expected)
})
