# [Permutations](https://en.wikipedia.org/wiki/Permutation)

A permutation is a sequence of items in a collection where order matters.
The number of permutations of `n` distinct objects is `n` factorial,
usually written as `n!`

As an exercise, let's calculate every permutation of a collection.

# Example

Given a set of three numbers: `{1, 2, 3}`, there are 3! = 3 * 2 * 1 = 6
distinct permutations of this set.

The permutations are as follows:

```
(1,2,3)
(1,3,2)
(2,1,3)
(2,3,1)
(3,1,2)
(3,2,1)
```

# Thoughts

Since we're going to calculate every permutation, there's not much
algorithmic ingenuity to employ here.
