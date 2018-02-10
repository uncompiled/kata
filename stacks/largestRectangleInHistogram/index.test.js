const largestRectangleInHistogram = require('../largestRectangleInHistogram')

test('largest rectangle in [1, 3, 1, 2, 1, 3] has area of 6', () => {
  let input = [1, 3, 1, 2, 1, 3]
  expect(largestRectangleInHistogram(input)).toEqual(6)
})

test('largest rectangle in [2, 1, 5, 6, 2, 3] has area of 10', () => {
  let input = [2, 1, 5, 6, 2, 3]
  expect(largestRectangleInHistogram(input)).toEqual(10)
})

test('largest rectangle in [6, 2, 5, 4, 5, 1, 6] has area of 12', () => {
  let input = [6, 2, 5, 4, 5, 1, 6]
  expect(largestRectangleInHistogram(input)).toEqual(12)
})
