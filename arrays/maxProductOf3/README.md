# Maximum Product of 3 Integers

Given an array of integers, find the maximum product of three of the integers.

- The input array will always have at least three integers.
- The integers must be distinct elements in the array meaning that
  we can't select the maximum integer and multiply it by itself.

## Example

Given the following array:

```
[1, 2, 3, 4, 5]
```

The largest product of 3 numbers is `3 * 4 * 5`, so the answer is `60`.

## Thoughts

This is a leading example because it makes the problem deceptively simple.
If the array is sorted, you could take the last 3 numbers from the array,
which are the three largest numbers.

However, there could be negative numbers.

Given the following input:

```
[-10, -10, 0, 1, 2]
```

The three largest numbers are `0 * 1 * 2`, which is `0`.

_Ouch._

So what other information do we need?

Aside from the two largest, we also need to track the two smallest numbers.
This is because if they're both negative, then the product will be positive.
We could multiply that product with the largest number to get the maximum.

The actual solution should be `-10 * -10 * 2`, which is `200`.
