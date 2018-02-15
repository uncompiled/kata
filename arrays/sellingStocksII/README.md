# Best Time to Buy and Sell Stocks (II)

You're given an array where the element at index `i` is the price of a given
stock on day `i`.

Design an algorithm to find the maximum profit. You may complete as many
transactions as you like (buy one and sell one share of the stock multiple
times). However, you may not engage in multiple transactions at the same
time (you must sell the stock before you buy again).

## Example

Given the following array:

```
[1, 2, 3]
```

The maximum profit you could obtain is `2`:

- buy the stock for `1` on day `0`
- sell the stock for `3` on day `2` (current profit: `2`)

This is the same profit as:

- buy the stock for `1` on day `0`
- sell the stock for `2` on day `1` (current profit: `1`)
- buy the stock for `2` on day `1`
- sell the stock for `3` on day `2` (current profit: `2`)

## Thoughts

This variation allows you complete multiple transactions, but you can only
own one share of the stock at a time.

If the values are always ascending, this is trivial because it's just the
difference between the highest value and the lowest value.

If there are fluctations, then we don't want to sell when it's cheaper than
the price that we paid.

We can find the maximum profit by accumulating the delta of all ascending
pairs of sequences.
