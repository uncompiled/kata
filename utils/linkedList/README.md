# [Linked List](https://en.wikipedia.org/wiki/Linked_list)

A linked list is a fundamental data structure in computer science, most often used as an
alternative to an Array.

Linked lists are a list of items where each item points to the next item in the list.
To iterate through a linked list, you start at the `head` (the first item) and follow
the links until you reach the end.

## Example

For the most part, a linked list needs to define a minimal API:

- constructor (creates an empty list)
- insert
- delete
- next (some way to iterate through the list)

Some optional operations that could be useful:

- indexing (get the item at a certain position)
- head (get the first item in the list)
- last (get the last item in the list)
- find (search for an item in the list)
- reverse (inverts the order of the list)
- promote (given a node, make it the new head of the list)

## Thoughts

This is fairly straight forward, so I'm probably going to implement a doubly-
linked list (one that has both forward and backward pointers) to make it easier
to traverse in both directions.
