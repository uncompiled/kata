# Longest Substring Without Repeat

Given a string, find the length of the longest substring without repeating
characters.

## Example

For the string `abcabcbb`, the longest substring without repeating letters
is `abc`, which has a length of `3`.

For the string `bbbb`, the the longest substring without repeating letters
is `b`, which has a length of `1`.

## Thoughts

The brute force method would be to:

- generate all of the substrings
- check the number of unique characters in each substring
- return the largest number

We can use a hash to count the number of repeating letters.

Since it's a substring and not a subsequence, the letters must be contiguous.

We can iterate over the characters in the array and for each position in the
original string, we can store the maximum # of unique characters for the
substring that we've seen so far.
