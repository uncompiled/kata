const buyAndSellStocks = require('../sellingStocksII')

test('no prices result in no profit', () => {
  expect(buyAndSellStocks([])).toEqual(0)
})

test('[1, 2] results in profit of 1', () => {
  expect(buyAndSellStocks([1, 2])).toEqual(1)
})

test('[1, 2, 3] results in profit of 2', () => {
  expect(buyAndSellStocks([1, 2, 3])).toEqual(2)
})

test('[3, 2, 1] results in profit of 0', () => {
  expect(buyAndSellStocks([3, 2, 1])).toEqual(0)
})

test('[1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1] results in profit of 15', () => {
  let input = [1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1]
  expect(buyAndSellStocks(input)).toEqual(15)
})
