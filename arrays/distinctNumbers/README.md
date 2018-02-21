# Distinct Numbers in Window

You are given an array of `n` integers (A1, A2 ,…, AN) and an integer `k`.
Return the of count of distinct numbers in all windows of size `k`.

If `k` > `n`, return an empty array.

## Example

Given the array `[1, 2, 1, 3, 4, 3]` and `k = 3`:

All windows of size `k` are:

```
[1, 2, 1]
[2, 1, 3]
[1, 3, 4]
[3, 4, 3]
```

- There are `2` distinct numbers in `[1, 2, 1]`
- There are `3` distinct numbers in `[2, 1, 3]`
- There are `3` distinct numbers in `[1, 3, 4]`
- There are `2` distinct numbers in `[3, 4, 3]`

Therefore, the result is `[2, 3, 3, 2]`.

## Thoughts

We can use the sliding window technique to create windows from `0` to `n-k`.

We can use hashing to find out how many distinct elements there are inside a window.

The brute force approach is to generate `n-k` windows and find the number of
distinct elements in each window.

```javascript
generateWindows().map(window => new Set(window).size)
```

The time complexity of this is `O(nk^2)` because we're iterating over the
initial list to generate the windows (`n` items), but we're also iterating
over each window to calculate the distinct items and calculating the size
of that set.

We can be a little more time efficient because when we slide along the array,
we can decrement the frequency of the starting element and increment the
frequency of the next element.
