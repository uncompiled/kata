# Best Time to Buy and Sell Stocks (I)

You are given an array for which the element at index `i` is the price of a
given stock on day `i`.

If you were only permitted to complete at most one transaction
(i.e., buy one and sell one share of the stock), design an algorithm to
find the maximum profit.

## Example

Given the following input:

```
[1, 2]
```

The maximum profit that could be made is `1` by buying the stock on day `0`
and selling it on day `1`.

## Thoughts

Usually an optimization problem can be solved by some form of dynamic
programming.  In this case, we want to find the maximum profit.

The maximum profit is when the delta between the prices at day `i` and `j`
are the largest.  A constraint is that `j > i` because you can't make
money from selling a stock that you don't own.

Another constraint is that you're only allowed to complete at most one
transaction, so that makes the problem slightly easier for us.

The brute force method would be to iterate over the array and for every
index `i`, check the difference between `i` and `i+1 .. n`, which is
asymptotically `O(n^2)`.

Another approach is to iterate over the array, but for every day, we
want to know what is the best profit if we sold on that day.

The profit if we sold on a given day is the current price less the minimum
price that we've seen so far.  The best price that we have is the highest
profit so far.  We can update both the minimum price that we've seen so far
and the maximum profit as we process the current price for each day.

This gives us `O(n)` time complexity with `O(1)` memory overhead.
