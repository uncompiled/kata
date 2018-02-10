# Implement Queue Using Stacks

Imagine that you only have access to a `Stack` object, which has two methods:

- `push`
- `pop`

Using these methods, implement a `Stack` with `enqueue` and `dequeue` methods.

## Example

```javascript
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop() // value is 2

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.dequeue() // value is 1
```

## Thoughts

This is one of those exercises where you're given a hammer, so everything
becomes a nail.

The problem here is that a stack is LIFO (last in first out) and a
queue is FIFO (first in first out).

How do we emulate FIFO with LIFO?

Well, we know that removing items from a stack will retrieve the items in
the reverse order of insertion.

What if we used a second stack to reverse the order again?

We could use one stack for `enqueue` operations and the other
stack to reverse all of the items for a `dequeue` operation.

