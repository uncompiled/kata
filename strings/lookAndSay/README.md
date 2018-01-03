# Look-and-say Sequence (Morris Number)

In mathematics, the look-and-say sequence is the sequence of integers
beginning as follows:

1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ... 

To generate a member of the sequence from the previous member,
read off the digits of the previous member, counting the number of digits
in groups of the same digit.

## Example

- 1 is read off as "one 1" or `11`
- 11 is read off as "two 1s" or `21`
- 21 is read off as "one 2, then one 1" or `1211`
- 1211 is read off as "one 1, one 2, then two 1s" or `111221`
- 111221 is read off as "three 1s, two 2s, then one 1" or `312211`

## Thoughts

To calculate the (n)th Morris Number, we can think of this as a recurrence
because we are "saying" the previous (n-1)th number.

One approach is to scan the digits and count the number of consecutive
equal digits.  Every time the digit changes, append the `count` and
the current `digit` to a result string.
