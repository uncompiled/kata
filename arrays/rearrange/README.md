# Re-arrange Array

Rearrange an array so that `array[i]` becomes `array[array[i]]`.

You can assume that all elements are in the range `0` to `n-1`,
so there will be no index errors.

## Example

Given the following array: `[1, 0]` the output should be `[0, 1]`

## Thoughts

If we can allocate a new array, then this is a simple transformation:

```javascript
array.map((_, i) => array[array[i]])
```

However, if we want to do it in-place without allocating extra memory,
we can think about encoding with [pairing functions](https://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function)

- increment every number by `(array[array[i]] % n) * n`
- divide every number by `n`
