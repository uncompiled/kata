# Unique Paths in a Grid

You have a grid of size `m * n`.

Assume you are starting at `(1, 1)` and your goal is to reach `(m, n)`.

If you are on `(x, y)`, you can either go to `(x, y + 1)` or `(x + 1, y)`.
(This means that you can only move to the right or down).

Now imagine that there are obstacles placed in the grid.
If there is an obstacle, the cell is marked with a `1`.
Otherwise, if the cell is empty, it is marked with a `0`.

## Example

There is one obstacle in the middle of this `3 x 3` grid:

```
[ [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0] ]
```

The total of unique paths is `2`.

## Thoughts

It is easier to think about this problem starting at the end `(m, n)` and
working backwards to the beginning.

For each position in the matrix, there are only two ways to reach it:
- from the cell to the left of it
- from the cell above it

If there is no obstacle, then the number of ways to reach a cell is the
sum of the ways to reach the previous two cells (the cell to the left
and the cell above it).
