# [Longest Common Subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)

A subsequence of a string is a set of characters that appear in the string,
but not necessarily in consecutive order.

Calculate the length of the longest common subsequence for two strings.

## Example

Given two strings, `BANANA` and `KATANA`, the longest common subsequence
is `AANA`, so the result is `4`.


## Thoughts

This makes it different from the longest common substring problem because that
problem only looks at substrings.  However, there is a similarity in that both
problems have optimal substructure, which makes them prime candidates for
dynamic programming.

If we use recursion to break down the problem into smaller subproblems, we
eventually get to the case where we're comparing a single character from
each string:

- If the characters are the same, then this is at least one character in
  the longest common subsequence.
- If the characters are different, we need to find the maximum of
  `longestCommonSubsequence(string1, rest(string2))` and
  `longestCommonSubsequence(rest(string1), string2)`.
  This is because the current character could be part of the longest common
  subsequence with the other string.  So we want the maximum.

We can re-write this recurrence as a recursive function in JavaScript,
which yields the brute-force result:

```javascript
function lcs (s1, s2) {
  // Base case: one of the sequences is empty, so there is nothing in common.
  if (s1.length === 0 || s2.length === 0) return 0

  return s1.charAt(0) === s2.charAt(0)
    ? 1 + lcs(s1.slice(1), s2.slice(1))
    : Math.max(lcs(s1.slice(1), s2), lcs(s1, s2.slice(1)))
}
```

This iterates over all the possible subsequences, which runs in `O(2^n)`
time.  This would happen when all characters of the strings are different.

We could improve this using memoization to prune the call tree for successive
calls for the same subsequences, but we'll just use the dynamic programming
approach.

We'll generate a matrix of size `m` x `n`, where each axis represents the
characters in each string.

The benefit of this approach is that we won't blow up the call stack
for extremely long subsequences and we can use the indices of the
lookup table to find the longest common subsequence (or multiple
subsequences, if they have the same maximal length).
