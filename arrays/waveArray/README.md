# Wave Array

Given an array of integers, sort the array into a wave like array and return it.

In other words, arrange the elements into a sequence such that:

```
a1 >= a2 <= a3 >= a4 <= a5 ...
```

## Example

Given the array `[1, 2, 3, 4]`

One possible wave-like array would be `[2, 1, 4, 3]`

Another possible answer is `[4, 1, 3, 2]`

## Thoughts

If the array was sorted, this could be done by splitting the array
into two arrays consisting of the even indices and the odd indices.

We could then merge the arrays together to form a wave-like sequence.

