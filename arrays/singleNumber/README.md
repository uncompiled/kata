# Single Number

Given an array of integers, every element appears twice except for one.

Find that single one.

Your algorithm should have a linear runtime complexity.

_Could you implement it without using extra memory?_

## Example

Given the following input:

```
[1, 2, 2, 3, 1]
```

The algorithm should return `3`.

## Thoughts

The first thing that comes to mind when thinking about uniqueness or frequency
is using a `Set` or a `Map` to track items that have been seen.

The basic algorithm would be to iterate over the list of integers and
add them to a `Set` of numbers that we've already seen.  If it's already
in the `Set`, then we remove it.  The problem stated that the input will
have the constraint where every element appears twice except for one.
That means that when the iteration is complete, the `Set` will contain one
item, which is the answer that we're looking for.  To return the result,
we can convert the `Set` to an `Array` and return the only element.

However, that algorithm uses `O(n)` space -- to be exact, `O(n/2 + 1)`
because 1/2 of the numbers in the input are the same.  As the array
gets processed, the repeat elements will be removed from the set and eventually
freed from memory.

Since the problem asks "Could you implement it without using extra memory?"
The answer is yes. 😉

We can use constant memory by using a single variable that we initialize to
zero.  As we iterate through the array, we `XOR` the current number with that
variable.  The reason this works is because all the numbers appear two times
(except for one).  When the duplicate number gets `XOR`ed, they cancel out.
At the end of the iteration, this leaves the variable set to the unique number.

Note that this won't work with invalid input.
