# Prime Numbers

Given a number `n`, find all of the prime numbers up to `n`.

## Example

For `n=7`, the result should be `[2, 3, 5, 7]`

## Thoughts

The brute force method would be to iterate over the range of `2` to `n`
and test whether each number is prime.

The most common algorithm for this is the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), which
creates an array of size `n + 1` and iterately marks off multiples
as composite numbers (not prime).
