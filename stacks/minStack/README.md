# Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element
in constant time.  Return `undefined` if there is no value to return.

| Method   | Description                                  |
|----------|----------------------------------------------|
| push(x)  | Push element x onto stack                    |
| pop()    | Removes the element on top of the stack      |
| top()    | Get the top element                          |
| min()    | Retrieve the minimum element in the stack    |

Note that all operations should run in constant time.

# Thoughts

A stack is usually implemented as an Array or a List, so
`push`, `pop`, and `top` are simple to do in constant time.

Getting the minimum element is a little more difficult
because a stack is not typically sorted, so searching for
an element takes linear time.

We could store the minimum as a value, so that we can keep track
of the minimum value in the stack when we `push` or `pop`.

When we `push` a value onto the stack, we need check if it's
smaller than the minimum value and update the value accordingly.

When we `pop` a value from the stack, we need to check if the
value at the top of the stack is the minimum value.  If the item
that we're popping is the minimum, we need to update the minimum
to be the next smallest, but how do we know what that is?

We could use another stack to maintain a history of the minimum
values, so that when we pop off the minimum value, we pop it off
both stacks.
