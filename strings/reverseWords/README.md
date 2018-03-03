# Reverse the Words in a Sentence

Given an input string that represents a sentence, return the sentence
with the words in reverse order.

## Example

Given the following input string:

```
the quick brown fox jumps over the lazy dog
```

The result should be:

```
dog lazy the over jumps fox brown quick the
```

## Thoughts

If you simply reverse the input string, then the letters in each word will
be reversed:

```
god yzal eht revo spmuj xof nworb kciuq eht
```

At this point, the words are in reversed order, but the characters are not.

For each word in the input, we could reverse it again, but we don't actually
need to do that if we tokenize the input.  As we iterate over the string,
whitespace is used to delimit tokens (words) in the input, so just split
on whitespace and reverse the tokens.
