# Least/Lowest Common Ancestor

Find the lowest common ancestor in an unordered binary tree given two values
in the tree.

> **Lowest common ancestor**: the lowest common ancestor (LCA) of two nodes
> `v` and `w` in a tree or directed acyclic graph (DAG) is the lowest
> (i.e. deepest) node that has both `v` and `w` as descendants.

You can assume the following:
- There will be no duplicate values in the tree
- The values might not be in the tree (if one of them doesn't exist, return -1)
- There are no parent pointers

## Example

```
        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2_     0        8
         /    \
        7      4
```

In this tree, the LCA of `5` and `1` is `3` (the root) because it is the lowest
node that is a parent of both `5` and `1`.

The LCA of `6` and `2` is `5` because that is the lowest node that has both
`6` and `2` as descendents.

## Thoughts

If the nodes have parent pointers, this exercise could be completed by
searching for the two nodes and following their parent pointers until
they intersect.

Since there are no parent pointers, we need to somehow find the ancestor
of two nodes.

One approach is to start at the root and look for each value.
While searching for a value, we could store the path from the root to the value
by pushing nodes into a list as we traverse the tree.  We do this for both
values.

Given the above example tree, the path to reach `6` would look like this:

```
[3, 5, 6]
```

The path to reach `2` would look like this:

```
[3, 5, 2]
```

If we look at the path, we notice that both paths start at the root, which
is an ancestor of everything in the tree, but `5` is the lowest ancestor
of the two values we're looking for.  Basically, the LCA is the last common
node for both paths.
