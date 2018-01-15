const lightBulbs = require('../lightBulbs')

test('empty array requires no switches to be flipped', () => {
  expect(lightBulbs([])).toEqual(0)
})

test('1 lit bulb requires no switches to be flipped', () => {
  expect(lightBulbs([true])).toEqual(0)
})

test('1 unlit bulb requires a single flip', () => {
  expect(lightBulbs([false])).toEqual(1)
})

test('example case works', () => {
  expect(lightBulbs([false, true, false, true])).toEqual(4)
})
