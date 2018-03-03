const reverseWords = require('../reverseWords')

test('empty sentence is the same backwards', () => {
  let input = ''
  expect(reverseWords(input)).toEqual(input)
})

test('same words reversed are the same', () => {
  let input = 'hello hello hello'
  expect(reverseWords(input)).toEqual(input)
})

test('the quick brown fox jumps over the lazy dog', () => {
  let input = 'the quick brown fox jumps over the lazy dog'
  let expected = 'dog lazy the over jumps fox brown quick the'
  expect(reverseWords(input)).toEqual(expected)
})
