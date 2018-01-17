const rpn = require('../rpn')

test('[1, 2, +] is 3', () => {
  expect(rpn([1, 2, '+'])).toEqual(3)
})

test('[2, 4, *] is 8', () => {
  expect(rpn([2, 4, '*'])).toEqual(8)
})

test('[9, 5, -] is 4', () => {
  expect(rpn([9, 5, '-'])).toEqual(4)
})

test('[10, 1, /] is 4', () => {
  expect(rpn([10, 1, '/'])).toEqual(10)
})

test('[0, 1, /] is 0', () => {
  expect(rpn([0, 1, '/'])).toEqual(0)
})

test('[2, 1, +, 3, *] is 9', () => {
  expect(rpn([2, 1, '+', 3, '*'])).toEqual(9)
})

test('[4, 13, 5, /, +] is 6', () => {
  expect(rpn([4, 13, 5, '/', '+'])).toEqual(6)
})

test('[1, 0, /] is Infinity', () => {
  expect(rpn([1, 0, '/'])).toBeUndefined()
})

test('[4, 13, 0, /, +] is 6', () => {
  expect(rpn([4, 13, 0, '/', '+'])).toBeUndefined()
})
