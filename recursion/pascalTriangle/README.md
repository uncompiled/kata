# [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle)

Pascal's triangle is a pyramid that's formed with the coefficients of binomial
expansion.

There are a lot of fun properties of Pascal's Triangle:

- The two sides of the triangle are `1`s
- The second diagonal consists of counting numbers: `range(1, n)`
- The triangle is symmetrical
- The sum of each row doubles each time: `sum(row_num) = (2 ^ row_num)`

This exercise is to write a function that generates a triangle of height `n`.

## Example

For height `5`:

```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

## Thoughts

The number at position (i, j) is `1` when `((i === 0) || (i === j))`
(i.e., along the edges of the triangle).

Every other number is the sum of the two numbers above it in
the previous row.
