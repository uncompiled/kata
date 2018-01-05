# [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)

The Levenshtein distance is used in linguistics and computer science as a
metric to determine how similar two strings are.

> Informally, the Levenshtein distance between two words is the minimum
> number of single-character edits (insertions, deletions or substitutions)
> required to change one word into the other.

This has a wide range of applications, for instance, spell checkers,
correction systems for optical character recognition, and software to assist
natural language translation based on translation memory.

## Example

The Levenshtein distance between "kitten" and "sitting" is 3, since the
following three edits change one into the other, and there is no way to do
it with fewer than three edits:

- **k**itten → **s**itten (substitution of "s" for "k")
- sitt**e**n → sitt**i**n (substitution of "i" for "e")
- sittin → sittin**g** (insertion of "g" at the end)

## Thoughts

Here's what we know:

- We are given two strings as input (s1 and s2)
- There are three operations that can be performed:
  `insertion`, `deletion`, or `substitution`
- **The distance is `0` when the strings are the same.**
  This is also the lower bound for the distance.
  The distance cannot be negative because that would not make sense.
- **The distance is at least the difference in length of the two strings.**
  If the strings are different lengths, you need to insert/delete
  the different in their length.
- **The distance is at most the length of the longer string.**
  In fact, this is quite important because it's also the base
  case for the recurrence.  If s1 is empty, the distance is the
  length of s2 (and vice versa).

