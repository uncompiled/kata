# [Greatest Common Divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)

In mathematics, the greatest common divisor (gcd) of two or more integers,
which are not all zero, is the largest positive integer that divides each
of the integers.

Given 2 non-negative integers `m` and `n`, find `gcd(m, n)`

GCD of 2 integers `m` and `n` is defined as the greatest integer `g`
such that `g` is a divisor of both `m` and `n`.

Both `m` and `n` fit in a 32-bit signed integer.

## Example

Given the numbers `8` and `12`, the largest number that divides of both is `4`.

## Thoughts

### Brute Force

The brute-force method of solving this problem would be to iterate from
`1` to `max(m, n)` and test whether each number is a divisor of `m` and `n`.

This very slow for large numbers, so we should probably use some math.

### [Euclidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)

> The Euclidean algorithm is based on the principle that the greatest common
> divisor of two numbers does not change if the larger number is replaced by
> its difference with the smaller number.

This means:

- `gcd(a, b) = gcd(a - b, b) if a > b`
- `gcd(a, b) = gcd(a, b - a) if b > a`

