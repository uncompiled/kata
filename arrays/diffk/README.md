# Diff K

Given an array `A` of sorted integers and another non negative integer k, find
if there exist 2 indices `i` and `j` such that `A[i] - A[j] = k` where `i != j`

Try doing this in less than linear space complexity.

## Example

Given the following input:

```
A: [1, 3, 5]
k: 4
```

The algorithm should return `true` because `5 - 1 = 4`

## Thoughts

The brute force method is to enumerate all pairs of numbers where `i != j`
and see if the difference is equal to `k`, but every puzzle like this can
be potentially optimized based on some characteristic of the input.

One thought is to see if we can trade space for time by utilizing a Set
to see what numbers are in the array.  That could bring down the runtime
complexity to `O(n)`, but if the same number appears twice in the array,
we have to account for that.  We could use a hash table or a Map with the
number as the key and the index as the value, so if we iterate through
the array again, then if the index for the current value is different
from the one in the Map, we're good.  The downside is that this uses `O(n)`
space complexity because we're basically storing the entire array in memory
as a Map.

A nested `for` loop with two indices typically has `O(n^2)` run time, but
if we use two pointers, we could probably find an optimization that lowers
the runtime complexity.

One thought is sorting the array.  This automatically means that we can do
no better than `O(nlogn)` time complexity because that's the penalty for
sorting an unsorted collection.  However, if the array is sorted, we don't
have to run a nested loop to compare pairs.  We can start at the lower end
and increment the indices until we find a suitable pair that meets the
constraints.
