# Parse Roman Numerals

Given a [roman numeral](https://en.wikipedia.org/wiki/Roman_numerals),
convert it to an integer.

The input is guaranteed to be within the range from 1 to 3999.

## Example

- Given `I`, return `1`
- Given `II`, return `2`
- Given `III`, return `3`
- Given `IV`, return `4`
- Given `VI`, return `6`
- Given `XIV`, return `14`
- Given `XX`, return `20`

## Thoughts

This is sort of like a base conversion exercise, but it's a little weird
because there are certain combinations that are subtractive.

In general, the letter with the highest value goes at the beginning.
The number of times the letter appears determines the value.

However, when a smaller valued letter appears first, we need to subtract
the value of that letter from the larger one.  For example `IV` is `5 - 1`
