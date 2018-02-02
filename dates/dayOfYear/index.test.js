const dayOfYear = require('../dayOfYear')

test('January 1st returns 1', () => {
  let input = new Date('January 1, 2018')
  expect(dayOfYear(input)).toEqual(1)
})

test('January 31st returns 31', () => {
  let input = new Date('January 31, 2018')
  expect(dayOfYear(input)).toEqual(31)
})

test('February 1st returns 32', () => {
  let input = new Date('February 1, 2018')
  expect(dayOfYear(input)).toEqual(32)
})

test('March 1st returns 60', () => {
  let input = new Date('March 1, 2018')
  expect(dayOfYear(input)).toEqual(60)
})

test('March 1st returns 61 on a leap year', () => {
  let input = new Date('March 1, 2000')
  expect(dayOfYear(input)).toEqual(61)
})

test('December 31st returns 365', () => {
  let input = new Date('December 31, 2018')
  expect(dayOfYear(input)).toEqual(365)
})

test('December 31st returns 366 on a leap year', () => {
  let input = new Date('December 31, 2000')
  expect(dayOfYear(input)).toEqual(366)
})
