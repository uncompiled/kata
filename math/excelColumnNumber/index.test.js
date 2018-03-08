const excelColumnNumber = require('../excelColumnNumber')

test('A returns 1', () => {
  expect(excelColumnNumber('A')).toEqual(1)
})

test('B returns 2', () => {
  expect(excelColumnNumber('B')).toEqual(2)
})

test('C returns 3', () => {
  expect(excelColumnNumber('C')).toEqual(3)
})

test('Z returns 26', () => {
  expect(excelColumnNumber('Z')).toEqual(26)
})

test('AA returns 27', () => {
  expect(excelColumnNumber('AA')).toEqual(27)
})

test('AB returns 28', () => {
  expect(excelColumnNumber('AB')).toEqual(28)
})
