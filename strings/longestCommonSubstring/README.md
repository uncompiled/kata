# [Longest Common Substring](https://en.wikipedia.org/wiki/Longest_common_substring_problem)

The longest common substring problem is to find the longest string
that is a substring of two (or more) strings.

There is a difference between the term `substring` and `subsequence`,
so this should not be confused with the longest common subsequence
problem.

- `substring` is contiguous
- `subsequence` is not contiguous

## Example

The longest common substring of the strings `ABABC` and `BABCA` is string `ABC`
of length 3.

Other common substrings are `A`, `AB`, `B`, `BA`, `BC` and `C`, but `ABC`
is the longest.

```
  ABABC
    |||
   BABCA
```

## Thoughts

When I think of a problem that asks for the "longest", this usually suggests
an optimization problem, which tends to have a dynamic programming solution.

To use the dynamic programming approach, we would create a table with each
string along the x and y axis.  The indices of the matrix represent the
indices of the starting and ending positions of the substrings in each string.

We can initially zero out the entire table and generate the common substring
lengths for each starting and ending position.  So for the first row and column
the substring is the first character of either string, so if the character
is the same, then the value should be set to `1`.  Otherwise, it's `0`.

Then we iterate, building up a longer substring.  If the next character is
the same, then the substring is one character longer and we can save that
into the table, but if it's not the same, we reset back to zero because
the substring is no longer matching between.
