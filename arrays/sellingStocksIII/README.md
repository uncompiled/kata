# Best Time to Buy and Sell Stocks III

You're given an array where the element at index `i` is the price of a given
stock on day `i`.

Design an algorithm to find the maximum profit if you can only complete
at most two transactions.

> NOTE: You may not engage in multiple transactions at the same time
  (you must sell the stock before you buy again).

## Example

Given the following array:

```
[1, 2, 1, 2]
```

The maximum profit would be `2`:

- buy the stock for `1` on day `0`
- sell the stock for `2` on day `1`
- buy the stock for `1` on day `2`
- sell the stock for `2` on day `4`

## Thoughts

This variant is an optimization problem that is similar to variant II
(multiple purchases), but you can only complete at most two transactions.

Profit can only be made via pairs of ascending prices, however, you can't
simply find the maximum value and buy two of them.

We need to use dynamic programming to create a table of `maxProfit` using
`k` transactions (where `k=2` for this problem).

Given the following array: `[2, 5, 7, 1, 4, 3, 1, 3]`, we can generate
a table of `prices` (x-axis) to `transactions` (y-axis):

|   | 2 | 5 | 7 | 1 | 4 | 3 | 1 | 3 |
|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 3 | 5 | 5 | 5 | 5 | 5 | 5 |
| 2 | 0 | 3 | 5 | 5 | 8 | 8 | 8 | 8 |

This table represents the maximum profit from selling `y` transactions on
day `x`.  The table can be initialized with zero in each cell (no profit).

For `0` transactions, the entire row is `0` because you can't make any money
unless you buy + sell a stock.  For the first column, the maximum profit is
also zero because with only one day/price, you can't sell any stock to make
profit.

The row for `1` transaction is straightforward.  For each cell in the row,
the value is max between the previous cell and the max difference b/w the
current price and each of the previous prices.