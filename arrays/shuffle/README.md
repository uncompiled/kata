# In-Place Shuffle

Write a function for doing an in-place shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must
have the same probability of ending up in each spot in the final array.

Assume that you have a function `getRandom(floor, ceiling)` for getting a
random integer that is `>= floor` and `<= ceiling`.

## Example

Given an array with the elements:

```
[1, 2, 3]
```

The function should return a random permutation of the input.

Any one of these results are valid:

- `[1, 2, 3]`
- `[1, 3, 2]`
- `[2, 1, 3]`
- `[2, 3, 1]`
- `[3, 1, 2]`
- `[3, 2, 1]`

## Thoughts

We can't simply iterate through the array using the `getRandom` function
because it won't give a uniform random distribution.  Perhaps in some
stroke of terrible luck, `getRandom` picks the first element every time.

The number of possible results is `factorial(array.length)`, so another
approach is to generate permutations and use the `getRandom` function to
choose one of the possible permutations. However, generating all of the
permutations first is slow.

Without the in-place requirement, we could do this in linear time and
linear space by copying the input array.  Each time `getRandom` selects
an item from the list, we remove it from the set of choices for the
next selection.  That removes the possibility of randomly selecting
the same item multiple times (or never selecting an item).

That approach would work, but it doesn't meet the criteria of shuffling
in-place.

We could think about the way that merge sort or quick sort is done in-place.
Instead of allocating new arrays when the input is partitioned, we store
the partition index.  As we iterate over the input elements, everything
before the partition index is shuffled (and everything after the partition
index is fair-game as input to the `getRandom` function).
