# [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))

A heap is a binary tree that has the following properties:

- constant time access to the `maximum` or `minimum` element
- logarithmic time insertion/deletion elements

## Example

```
                 ┌───┐
        ┌────────│ 1 │────────┐
        ▼        └───┘        ▼
      ┌───┐                ┌────┐
  ┌───│ 3 │───┐        ┌───│ 15 │───┐
  ▼   └───┘   ▼        ▼   └────┘   ▼
┌───┐       ┌───┐   ┌────┐       ┌────┐
│ 5 │       │ 9 │   │ 20 │       │ 30 │
└───┘       └───┘   └────┘       └────┘
```

In a min heap, every node's value is smaller than that of it's children.
This means that the minimum value is always stored in the root of the tree.

In a max heap, the opposite is true.  Every node's value is larger than those
of it's children.  Therefore, the maximum value is stored in the root of the
tree.
