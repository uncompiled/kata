# Reverse a Linked List Sublist

Reverse a linked list from position `m` to `n`.

Do it in-place and in one-pass.

## Example

Given the following list:

```
(1 -> 2 -> 3 -> 4 -> 5)
```

If `m=2` and `n=4`, then return the following list:

```
(1 -> 4 -> 3 -> 2 -> 5)
```

## Thoughts

One approach is to take the sublist from position `m` to `n`,
reverse that list, and splice it back into position.

Reversing the entire list is pretty standard, but this is more difficult
because we need to know where the list stays normal and where the list gets
reversed.

We'll need to keep track of a `previous` node so that once we hit `m`,
we can splice the reversed head into the original list.
