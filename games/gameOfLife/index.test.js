const gameOfLife = require('../gameOfLife')

test('Empty world stays empty', () => {
  const empty = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

  expect(gameOfLife(empty)).toEqual(empty)
})

test('Block pattern works', () => {
  const t0 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  const t1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  expect(gameOfLife(t0)).toEqual(t1)
})

test('Tub pattern works', () => {
  const tub = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  expect(gameOfLife(tub)).toEqual(tub)
})

test('Blinker pattern works', () => {
  const t0 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  const t1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  expect(gameOfLife(t0)).toEqual(t1)
  expect(gameOfLife(t1)).toEqual(t0)
})

test('Beacon pattern works', () => {
  const t0 = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0]
  ]

  const t1 = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0]
  ]

  expect(gameOfLife(t0)).toEqual(t1)
  expect(gameOfLife(t1)).toEqual(t0)
})
