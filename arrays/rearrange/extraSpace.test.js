const rearrange = require('../rearrange/extraSpace')

test('[0, 0] results in [0, 0]', () => {
  expect(rearrange([0, 0])).toEqual([0, 0])
})

test('[2, 1, 0] results in [0, 1, 2]', () => {
  expect(rearrange([2, 1, 0])).toEqual([0, 1, 2])
})
