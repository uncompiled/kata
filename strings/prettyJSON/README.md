# Prettify JSON

Pretty print a json object using proper indentation.

- Every inner brace should increase indentation to the following lines
- Every close brace should decrease indentation
- Indents can be increased by inserting `\t`

For this exercise, you can ignore whitespace.
Your solution should return a list of strings,
where each entry corresponds to a single line.

The strings should not have `\n` character in them.

## Example

Given the following JSON object:

```javascript
let input = ["foo", {"bar":["baz",null,1.0,2]}]
```

The output should be:

```javascript
[
    "foo",
    {
        "bar":
        [
            "baz",
            null,
            1.0,
            2
        ]
    }
]
```

## Thoughts

Indentation should increase when an opening brace (`{` or `[`) is seen,
conversely, indentation should decrease when a closing brace (`}` or `]`)
is seen.

First thought is to use a stack to keep track of the levels of indentation,
but since each level of indentation results in a number of `\t` characters
(the length of the stack), we could just use a single variable to keep
track of how many levels deep we are.

The problem also asks us to split the input string into a list of strings,
where each brace is a new line.

We should be able to do this in `O(n)` where `n` is the length of the input
string.  As we iterate through the string, we build up a buffer of characters
that we've seen.  Every time we see an opening brace, we increment the
indentation counter and flush the buffer by pushing it into an accumulator
(list of output lines).  When we see a closing brace, we decrement the
indentation counter and flush the buffer as well.

We also need to add a line break when we see a comma in a list, so when
we see a comma, we flush the current line using the same depth.

There are some edge cases, such as nested objects or forcing a closing
brace to be on its own line, so we have to be careful about how we handle them.
