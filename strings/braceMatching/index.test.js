const matchBrackets = require('../braceMatching')

test('no bracket at requested position', () => {
  let input = 'Hello there!'
  let position = 0

  // Since there is no bracket at the requested position,
  // the result should be the position that we requested.
  expect(matchBrackets(input, position)).toEqual(position)
})

test('no matching bracket', () => {
  let input = '( the case of the missing parens'
  let position = 0

  // Since there is no bracket at the requested position,
  // the result should be the position that we requested.
  expect(() => matchBrackets(input, position)).toThrow()
})

test('bracket at requested position', () => {
  let input = "(Hello... it's me.)"
  let position = 0

  expect(matchBrackets(input, position)).toEqual(18)
})

test('match outer parenthesis', () => {
  let input = '([{}])'
  let position = 0

  expect(matchBrackets(input, position)).toEqual(5)
})

test('match square bracket', () => {
  let input = '([{}])'
  let position = 1

  expect(matchBrackets(input, position)).toEqual(4)
})

test('match curly bracket', () => {
  let input = '([{}])'
  let position = 2

  expect(matchBrackets(input, position)).toEqual(3)
})

test('match nested parentheses', () => {
  let input = '(()[][{}])'
  let position = 1

  expect(matchBrackets(input, position)).toEqual(2)
})

test('match nested square bracket', () => {
  let input = '(()[][{}])'
  let position = 3

  expect(matchBrackets(input, position)).toEqual(4)
})

test('ignore junk', () => {
  let input = '(a(b)c[d]e[f{g}h]i)jklmnopqrstuvwxyz'
  let position = 10

  expect(matchBrackets(input, position)).toEqual(16)
})

test('invalid input will not find a match', () => {
  let input = '})(][{'
  let position = 0

  expect(matchBrackets(input, position)).toEqual(0)
})

test('example from README.md works', () => {
  let input = `Sometimes when I talk (or write), I use an excessive (meaning too many)
  number of parentheses (these things: "(" and ")"), so it can be confusing
  when they don't match.`
  let position = 22

  expect(matchBrackets(input, position)).toEqual(31)
})
