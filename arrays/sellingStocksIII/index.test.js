const buyAndSellStocks = require('../sellingStocksIII')

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

test('[1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1] results in profit of 9', () => {
  let input = [1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1]
  /**
   * DP table:
   * [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
   *   [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
   *   [ 0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 9 ] ]
   */
  expect(buyAndSellStocks(input)).toEqual(9)
})

test('[2, 5, 7, 1, 4, 3, 1, 3] results in profit of 8', () => {
  let input = [2, 5, 7, 1, 4, 3, 1, 3]
  /**
   * DP table:
   * [ [ 0, 0, 0, 0, 0, 0, 0, 0 ],
   *   [ 0, 3, 5, 5, 5, 5, 5, 5 ],
   *   [ 0, 3, 5, 5, 8, 8, 8, 8 ] ]
   */
  expect(buyAndSellStocks(input)).toEqual(8)
})
