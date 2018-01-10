# [Run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding)

Run-length encoding is a simple compression scheme where consecutive data
elements are stored as a single value and the associated count.

This type of compression was used in early television signals.
For example, imagine a screen that is mostly black with an image in the center.
If you need to send every pixel, there will be a lot of duplicate runs of
black pixels.  Instead of sending every pixel, we can just send a number that
corresponds to the number of black pixels.

## Example

If the following string is compressed using run-length encoding:

```
AAAAAAAAAABBBBB
```

We get:

```
10A5B
```

## Thoughts

Read in the first character and count how many occurrences there are.
When the next character is different, output the count and the character.
