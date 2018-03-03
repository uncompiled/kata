function buyAndSellStocks (prices) {
  if (!prices) return 0

  let minPrice = Number.MAX_VALUE
  let maxProfit = 0

  prices.forEach(currentPrice => {
    minPrice = Math.min(minPrice, currentPrice)
    maxProfit = Math.max(maxProfit, currentPrice - minPrice)
  })

  return maxProfit
}

module.exports = buyAndSellStocks
