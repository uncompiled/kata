# Regular Expression Matching

Implement simplified regular expression matching with support for `.` and `*`.

- `.` matches any single character
- `*` matches zero or more of the previous character

The matching should cover the entire input string (not partial).

## Examples

| Regular Expression | Matches                |
|--------------------|------------------------|
| `a`                | `a`                    |
| `aa`               | `aa`                   |
| `a*`               | `''`, `a`, `aa`        |
| `.*`               | `''`, `a`, `b`, `abc`  |
| `a*b*c`            | `c`, `bc`, `ac`, `abc` |

## Thoughts

If the regular expression and the input string are identical, then we have a
match. As a base case, if the pattern is empty, then there is match if the
text is also empty.

The next step is to determine the recurrence cases.

- The case of matching a character or a `.` are really the same thing.
  The `.` is just a more relaxed form -- it matches any single character.
- The case of the `*` is more complicated because we have to deal with
  zero or more matches of the _previous_ character.

To split between the cases, we can look ahead to check if the next
character is a `*`:

- If it's not a `*`, we check the first character in the pattern and text
  to see if they match.
- Otherwise, we have to deal with the `*` by checking whether the pattern
  prefix matches the text prefix (or if the pattern prefix is a `.`)
