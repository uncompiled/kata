const buyAndSellStocks = require('../sellingStocksI')

test('no prices results no profit', () => {
  expect(buyAndSellStocks([])).toEqual(0)
})

test('[1, 2] results in 1', () => {
  expect(buyAndSellStocks([1, 2])).toEqual(1)
})

test('[9, 5, 4, 3, 2, 1] results in 0', () => {
  // The best profit you can make is by not playing the game at all
  // or buying and selling in the same day...
  expect(buyAndSellStocks([9, 5, 4, 3, 2, 1])).toEqual(0)
})

test('[9, 5, 4, 3, 2, 10] results in 8', () => {
  expect(buyAndSellStocks([9, 5, 4, 3, 2, 10])).toEqual(8)
})
