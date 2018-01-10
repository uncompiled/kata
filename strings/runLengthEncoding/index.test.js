const runLengthEncoding = require('../runLengthEncoding')

test('empty string', () => {
  expect(runLengthEncoding('')).toEqual('')
})

test('one character string', () => {
  expect(runLengthEncoding('a')).toEqual('a')
})

test('string with all unique characters should not be compressed', () => {
  expect(runLengthEncoding('abcdefg')).toEqual('abcdefg')
})

test('aa should become 2a', () => {
  expect(runLengthEncoding('aa')).toEqual('2a')
})

test('last character is handled correctly', () => {
  expect(runLengthEncoding('aaaaab')).toEqual('5a1b')
})

test('readme example matches expected', () => {
  let input = 'AAAAAAAAAABBBBB'
  let expected = '10A5B'
  expect(runLengthEncoding(input)).toEqual(expected)
})

test('black and white pixel string should be compressed', () => {
  let input =
    'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'
  let expected = '12W1B12W3B24W1B14W'
  expect(runLengthEncoding(input)).toEqual(expected)
})
