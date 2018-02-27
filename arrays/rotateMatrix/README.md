# Rotate a Matrix

A bitmap image is really just a matrix of pixels, where each pixel is a
specific color.  What if we wanted to rotate the image?

You are given an `n` x `n` matrix representing an image.

Rotate the image 90 degrees clockwise.

## Example

If you're given the following input matrix:

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

The clockwise rotated version becomes:

```
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
```

## Thoughts

The complexity of this challenge depends on your constraints.

If you're only allowed to read from the matrix, then we could
wrap the matrix in a function that retrieves the transposed pixels.
This would be `O(1)` time and `O(1)` space because you're just
transposing the indices.

However, if you need to modify the image, then there are two approaches:

- immutable transposition
- in-place transposition

If you treat an image as immutable, you can clone the matrix and do
the transposition of pixels during the clone.  This would run in
`O(n * n)` time, which is really linear since there are `n^2` pixels.

In a functional programming paradigm, you could `zip` and `reverse`
the original matrix, which would yield the rotated matrix.

However, you can also perform this operation in-place.  Imagine that we have
a 50 megapixel camera and we're editing an enormous image.  It's not very
efficient to allocate 2x the memory to rotate the image.  Instead, you can
do non-destructive edits by storing the edit/filter as a function that
transforms the original image.  When you save the image, the function can
be applied to the image, which outputs the processed (rotated) image to
disk.
