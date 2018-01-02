# Print a Matrix in Spiral Order

Given a matrix of m * n elements (m rows, n columns),
return all elements of the matrix in spiral order.

## Example

Given the following input matrix:

```
[
    [ 1, 2, 3 ],
    [ 8, 9, 4 ],
    [ 7, 6, 5 ]
]
```

The result should be:

```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Thoughts

This is a seemingly innocuous puzzle that seems straightforward,
but is actually a bit tricky due to off-by-one errors and thinking
about how to advance the current `(x, y)` to the next value
without duplicates in the output array.

There's probably a way to solve this recursively with a function
that prints the perimeter for a matrix.  You could recursively
call this function with successively smaller rectangles until
either the height or width are zero.

