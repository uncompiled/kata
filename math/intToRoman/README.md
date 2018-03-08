# Integer to Roman

Given an integer, convert it to a roman numeral, and return a string
corresponding to its roman numeral version.

Input is guaranteed to be within the range from `1` to `3999`

## Example

- Given the input `1`, return `I`
- Given the input `5`, return `V`
- Given the input `14`, return `XIV`

## Thoughts

This is a base conversion exercise.  It's similar to converting a roman numeral
into a decimal integer, but in reverse.

The weird part about roman numerals is the subtractive notation, but if we
write out the possible numbers, we notice that the subtractive notation only
occurs for specific integers: `4` and `9`.

For example `I` can come before `V`, which results in `IV` and that equals `4`.
`I` could also come before `X`, which results in `IX` and that equals `9`.

If we go a little bit bigger, we see that if `X` comes before `L`, we have `XL`
which equals `40`.  `X` could also come before `C`, which is `XC` and that
equals `90`.

Basically, when you're converting a `4` or `9` from decimal over to roman
numerals, you are going to convert them to _two_ digits instead of one.

We can handle this by creating a conversion table that takes an integer
as a key and stores a roman numeral string as the value.

We iterate over the digits of the decimal integer and look up the values
in the conversion table to get the final roman numeral.
