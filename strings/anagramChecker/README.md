# Anagram Checker

Write a function `anagramCheck(a, b)` that returns `true` if the two strings
are anagrams of each other. Otherwise, return `false`.

## Example

Two strings are anagrams of each other if they contain the same letters, but
rearranged.

For example, `naga ram` is an anagram of `anagram`.

## Thoughts

There are a lot of ways to do this, but the simple solution that comes to
mind is to sort both strings and check each index to make sure that the
characters in both strings are the same.

If we have to sort, we end up with at least `O(nlogn)` runtime to sort
the strings.

Ultimately, two strings are anagrams of each other if they contain the same
_frequency_ distribution of letters.  We can actually store the frequencies
of each letter in string `a` and then iterate over `b` decrementing the
frequency.  This takes up `O(n)` space, but brings the algorithm down to
linear time.
