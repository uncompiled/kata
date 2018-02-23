# Substring Concatenation

You are given:
- a string (`string`)
- a list of words (`list`) that are all the same length

Find all starting indices of substring(s) in `string` that are a concatenation
of each word in `list` exactly once and without any intervening characters.

## Example

Given the string `barfoothefoobarman` and the list `['foo', 'bar']`,
the result would be `[0, 9]` because those are the starting indices
for substrings that contain each word in the list of words

- At index `0`, we have the substring `barfoo`
- At index `9`, we have the substring `foobar`

## Thoughts

Since every word in the list is the same length, the length of the substring(s)
will be a multiple of the word length.

We can use a hash to calculate the frequency of each word in the input list.

We can then iterate over substrings of the original string checking to see
whether each of the words in the input list are present.  Since the words are
all the same length, we iterate over the input string by incrementing the
word length each time.  Each time we go through the loop, we clone the frequency
map and decrement the map each time one of the words appears in the substring.
If all words are present, then the frequency map will be empty and we can add
the current index to the list of starting indices.
