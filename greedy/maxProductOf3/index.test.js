const maxProductOf3 = require('../maxProductOf3')

test('array with less than 3 numbers has undefined result', () => {
  expect(maxProductOf3([])).toBeUndefined()
})

test('max product of [1, 2, 3, 4, 5] is 60', () => {
  expect(maxProductOf3([1, 2, 3, 4, 5])).toEqual(60)
})

test('max product of [3, 3, 3] is 27', () => {
  expect(maxProductOf3([3, 3, 3])).toEqual(27)
})

test('max product of [-10, -10, 0, 1, 2] is 200', () => {
  expect(maxProductOf3([-10, -10, 0, 1, 2])).toEqual(200)
})
