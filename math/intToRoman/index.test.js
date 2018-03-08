const intToRoman = require('../intToRoman')

test('1 returns I', () => {
  let number = 1
  let expected = 'I'
  expect(intToRoman(number)).toEqual(expected)
})

test('3 returns III', () => {
  let number = 3
  let expected = 'III'
  expect(intToRoman(number)).toEqual(expected)
})

test('4 returns IV', () => {
  let number = 4
  let expected = 'IV'
  expect(intToRoman(number)).toEqual(expected)
})

test('5 returns V', () => {
  let number = 5
  let expected = 'V'
  expect(intToRoman(number)).toEqual(expected)
})

test('14 returns XIV', () => {
  let number = 14
  let expected = 'XIV'
  expect(intToRoman(number)).toEqual(expected)
})

test('2018 returns MMXVIII', () => {
  let number = 2018
  let expected = 'MMXVIII'
  expect(intToRoman(number)).toEqual(expected)
})
