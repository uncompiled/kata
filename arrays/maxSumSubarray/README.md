# [Max Sum Contiguous Subarray](https://en.wikipedia.org/wiki/Maximum_subarray_problem)

Find the contiguous subarray within an array (containing at least one number)
which has the largest sum.

For this problem, return the maximum sum.

## Example

Given the following array:

```
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

The contiguous subarray `[4, -1, 2, 1]` has the largest sum, which is `6`.

## Thoughts

A subarray is basically a slice, so the brute force method is to sum
every slice in the original array and return the largest number.

If all the numbers are positive, the solution would be the sum of the
entire array.

If all the numbers are negative, then the solution would be a single
number (the largest of all the numbers).

With both negative and positive numbers, it's trickier.  It's also
possible that two different subarrays sum to the same value.

We could improve this by taking a dynamic programming approach.
For each index `i` in the array, we calculate the maximum sum
for the subarray ending at `i`.  We could store this in another
array of length `n` and then iterate over that array to find the
maximum sum of all the subarrays.  That algorithm would run in
`O(n)` time and use `O(n)` space, but we could improve the space
because we don't actually need to store all of the sums.  We only
need to store the maximum sum, so you could store that in a single
variable (`globalMaximum`) that gets updated as we iterate through
the array.
