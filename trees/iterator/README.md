# Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST).
Your iterator will be initialized with the root node of a BST.

The first call to `next()` will return the smallest number in BST.
Calling `next()` again will return the next smallest number in the BST, and so on.

> NOTE: `next()` and `hasNext()` should run in average `O(1)` time and use `O(h)` memory.

## Example

The BST Iterator will be called like this:

```javascript
let iterator = new BSTIterator(root)
while (iterator.hasNext()) {
  console.log(iterator.next())
}
```

## Thoughts

One way to do this is to do an inorder traversal of the tree to generate
an array, which would give constant time lookup for both `next()` and
`hasNext()` operations.  The downside is that this uses `O(n)` memory.

The problem asks us to use `O(h)` memory.  If we want to have `O(h)`
asymptotic memory usage, then we don't want to store all of the nodes,
but only up to the height of the tree.

This suggests thinking about the path from the root to the next smallest
leaf.  We can use a stack to mimic the call tree for tree traversal.

For example, when we initialize the iterator, we traverse to the leftmost
leaf, pushing each node along the path onto a stack:

```javascript
let stack = []
let curr = root
while (curr) {
  stack.push(curr)
  curr = curr.left
}
```

At the end of initialization, the stack has the smallest number on the
top of the stack (and the root at the bottom).

To iterate over the BST, we can pop the top element off the stack.
We check if that element has any right children and if so, we traverse
to the leftmost leaf, pushing each node along the path onto the stack.
