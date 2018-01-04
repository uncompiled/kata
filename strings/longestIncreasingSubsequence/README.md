# [Longest increasing subsequence](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)

This is also known as the longest nondecreasing subsequence problem.

> In computer science, the longest increasing subsequence problem is
> to find a subsequence of a given sequence in which the subsequence's 
> elements are in sorted order, lowest to highest, and in which the
> subsequence is as long as possible. This subsequence is not necessarily
> contiguous, or unique. Longest increasing subsequences are studied in
> the context of various disciplines related to mathematics, including
> algorithmics, random matrix theory, representation theory, and physics.

## Example

Using the first 16 terms of the binary Van der Corput sequence as input:

```
0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15
```

One longest increasing subsequence is:

```
0, 2, 6, 9, 11, 15
```

There are multiple longest increasing subsequences:

```
0, 4, 6, 9, 11, 15
0, 2, 6, 9, 13, 15
0, 4, 6, 9, 13, 15
```

However, the longest subsequence has length 6.  There is no longer subsequence.

## Thoughts

Brute force is always an option:

- Enumerate all possible subsequences
- Test whether the subsequence is nondecreasing

But that's terrible. We can do better.

For every position i in the string, we can calculate the longest
increasing subsequence up to that point and store it in an auxilliary
array. This consumes O(n) space and requires that we look at n items
with subsequences of length n-1, so the time complexity is roughly O(n^2).