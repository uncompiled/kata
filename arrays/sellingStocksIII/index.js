function buyAndSellStocks (prices, k = 2) {
  if (!prices || prices.length < 2) return 0

  // Initialize DP table to store results of subproblems, where the subproblem
  // is the maximum profit if you sold stock on day i with up to k transactions
  let profit = new Array(k + 1)
    .fill([])
    .map(() => new Array(prices.length).fill(0))

  for (let i = 1; i <= k; i++) {
    let localMax = profit[i - 1][0] - prices[0]
    for (let j = 1; j < prices.length; j++) {
      profit[i][j] = Math.max(profit[i][j - 1], prices[j] + localMax)
      localMax = Math.max(localMax, profit[i - 1][j] - prices[j])
    }
  }

  return profit[k][prices.length - 1]
}

module.exports = buyAndSellStocks
