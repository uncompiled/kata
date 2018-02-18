# Add Two Numbers as Lists

You are given two linked lists representing two non-negative numbers.
The digits are stored in reverse order and each of their nodes contain
a single digit. Add the two numbers and return it as a linked list.

## Example

Given the following lists:

```
(2 -> 4 -> 3)
(5 -> 6 -> 4)
```

The first list represents the number `342` (the digits reversed) and the
second list represents the number `465`.

If we add the numbers together:

```
342 + 465 = 807
```

We should return the following list:

```
(7 -> 0 -> 8)
```

## Thoughts

This is mostly an exercise whether you can traverse a linked list and whether
you can simulate arithmetic.  Each node in the list represents a digit in a
number system.  Given the examples, we assume the number system is decimal,
i.e., each digit represents a number between `0-9` and if the sum is larger
than `9`, we need to carry to the next digit.

Since the numbers are in reversed order from least significant digit to
most significant digit, we can simply consume the digits in both lists until
there are no more digits or carry left.
