# Sort By Color

Given an array with `n` objects colored `red`, `white` or `blue`,
sort the array in-place so that objects of the same color are adjacent,
with the colors in the order `red`, `white`, and `blue`.

We will represent the colors `red`, `white`, and `blue` using strings.

The solution should be done in linear time.

> **NOTE:** Using a library sort function is not allowed.

## Example

Given the following input:

```
['red', 'white', 'blue', 'red', 'white', 'blue']
```

The modified array should be:

```
['red', 'red', 'white', 'white', 'blue', 'blue']
```

## Thoughts

We don't want to use a sorting algorithm because that would require
at least `O(nlogn)` runtime.

Sorting the array in-place also suggests that memory usage is a concern.

There are only three possible objects, so we don't actually need
to sort the array at all.

One possible way to solve this is by counting the number of times
that `red` appears, the number of times `white` appears, and the
number of times that `blue` appears.

Then we just overwrite the original array.

This requires 2 passes over the array, which is still `O(n)`.
