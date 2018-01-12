# [Convolution](https://en.wikipedia.org/wiki/Convolution_(computer_science))

Convolution is more commonly known as a `zip` function: it maps a
tuple of sequences into a sequence of tuples.

How could you implement a `zip` function?

## Example

Given the following input:

```javascript
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

`zip` on this matrix would return:

```
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```

## Thoughts

My first thought is to take a functional approach, which is probably
not the solution you'd take if memory was a concern.

If you return a new array from the input, you can retain the property
of being a pure function, but it comes at the cost of allocating
memory for the new object.

An alternate approach would be to transpose the elements in-place.
