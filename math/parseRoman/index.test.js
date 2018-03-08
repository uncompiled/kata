const parseRoman = require('../parseRoman')

test('I parses to 1', () => {
  let numerals = 'I'
  let expected = 1
  expect(parseRoman(numerals)).toEqual(expected)
})

test('III parses to 3', () => {
  let numerals = 'III'
  let expected = 3
  expect(parseRoman(numerals)).toEqual(expected)
})

test('IV parses to 4', () => {
  let numerals = 'IV'
  let expected = 4
  expect(parseRoman(numerals)).toEqual(expected)
})

test('IX parses to 9', () => {
  let numerals = 'IX'
  let expected = 9
  expect(parseRoman(numerals)).toEqual(expected)
})

test('XIV parses to 4', () => {
  let numerals = 'XIV'
  let expected = 14
  expect(parseRoman(numerals)).toEqual(expected)
})

test('XXIII parses to 4', () => {
  let numerals = 'XXIII'
  let expected = 23
  expect(parseRoman(numerals)).toEqual(expected)
})

test('MMXVIII parses to 2018', () => {
  let numerals = 'MMXVIII'
  let expected = 2018
  expect(parseRoman(numerals)).toEqual(expected)
})
