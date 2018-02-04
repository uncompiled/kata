# Find the `kth` to Last Node in a Singly Linked List

Write a function `kthToLastNode` that takes an integer `k` and the `head`
Node of a singly-linked list, and returns the `k`-th to last node in the list.

## Example

```javascript
let list = new LinkedList()
let head = list.push(1)
list.push(5)
list.push(10)
list.push(15)
list.push(20)

kthToLastNode(head, 2) // should return 15
kthToLastNode(head, 1) // should return 20
```

## Thoughts

With a doubly-linked list, this is trivial because we can use the `tail`
pointer and iterate backwards to the `k`-th element from the end.

Since we only have next pointers, we need to start at the `head` and
iterate to the end of the array.

My first thought is to iterate over the LinkedList and use a stack to store
each visited Node.  When we reach the end of the list, the top of the stack
will contain the last node.  Then we can pop `k` nodes off the stack to get
the desired item.

This uses `O(n)` time (to iterate through the length of the list) and `O(n)`
space (because we're storing the nodes on the stack). If we use recursion,
we're just replacing the explicit stack with the call stack.

If space is a concern, we can traverse the entire list to get the length.
Once we have the length of the list, we can traverse `length - k` nodes
to get to the target.
