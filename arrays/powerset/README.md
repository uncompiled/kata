# [Power set](https://en.wikipedia.org/wiki/Power_set)

A subset is a collection of items where all items are contained in a superset.
Set B is a subset of Set A if everything inside Set B is contained in A.

The power set is the set of all subsets for a given collection.

```
┌──────────────────────────────────────┐
│                                      │
│                     ┌─────────────┐  │
│                     │             │  │
│                  A  │      B      │  │
│                     │             │  │
│                     └─────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

## Example

If we have a set `[A, B, C]`, then the following are subsets:

```
[]
[A]
[B]
[C]
[A, B]
[A, C]
[B, C]
[A, B, C]
```

The power set of `[A, B, C]` is the set of all of these subsets.

## Thoughts

Calculating all of the subsets is slightly different from calculating
all of the permutations because order does not matter in a set.

Another difference is the upper bound on the two.

If `n` is the length (size) of the set, then:

- There are `n!` permutations of a set
- There are `2^n` subsets of a set

If we were to calculate a single random subset, we could do it in
(sub) linear time, but since we're going to calculate all of them,
we have to build the results using brute force.
