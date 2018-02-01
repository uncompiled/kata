# Count Bits

Write a function that takes an unsigned integer and
returns the number of `1` bits it has.

## Example

The 32-bit integer `11` has the following binary representation:

```
00000000000000000000000000001011
```

Therefore, the function should return `3`

## Thoughts

Let's be honest.  My first thought is to use a built-in number
formatting method to turn a decimal number into a binary string
and simply count the number of `1` characters in the string.

It's not pretty, but here's one implementation:

```javascript
function countBits (decimalNumber) {
  return new Number(decimalNumber).toString(2).split('')
    .reduce((acc, digit) => (digit === '1') ? acc + 1 : acc, 0)
}
```

I already know that this isn't the preferred solution to this exercise
because it's doing a lot of unnecessary work.  We don't need to convert
a Number to String at all.

We can use math for another terse solution using bitwise operators.
We can use the bitwise `&` operator to check whether the current number is
even or odd: `number & 1` will return `1` if it's odd and `0` if it is even.
Then we can use the bitshift operator to shift one bit at a time (equivalent
to dividing by 2 because we're dealing with binary) until the number is zero
(which means we've consumed all the digits).
