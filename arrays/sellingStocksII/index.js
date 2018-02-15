function buyAndSellStocks (prices) {
  if (!prices || prices.length < 2) return 0

  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - prices[i - 1]
    if (profit > 0) {
      maxProfit += profit
    }
  }

  return maxProfit
}

module.exports = buyAndSellStocks
