# Detect Cycle

Given a linked list, return the node where the cycle begins.
If there is no cycle, return `null`.

_Try solving it using constant additional space._

## Example:

Given the following list:

```
┌───┐         ┌───┐        ┌───┐         ┌───┐
│ 1 │────────▶│ 2 │───────▶│ 3 │ ───────▶│ 4 │
└───┘         └───┘        └───┘         └───┘
                             ▲             │
                             └─────────────┘
```

Return the node corresponding to node `3`.

There is a cycle because the node containing `4` links back to the node
containing `3`.  In the definition used by this exercise, the start of
the cycle is node `3` because if you index the nodes in the list, it is
the first node in the cycle.

## Thoughts

First things first: a linked list with a cycle should be called a graph.
It's better represented as nodes/vertices with edges.

There are multiple ways to do this and the first idea that comes to mind
is using a hash table.  As you iterate through the list, you can store a
reference to the node in an `Object` or a `Map`.  This enables you to
lookup whether the node has been seen as you traverse the list.  If it's
already in the `Map`, then you've found the answer.

IMO, this solution has the highest readability, but comes at the cost of
space.  In the worst case, you'll have store references to the entire list
in memory, which is `O(n)`.  If the cycle is near the beginning
of the list, you save both space and time.

_However, the exercise suggests that we can solve it in constant space._

This makes me think of [Floyd's tortoise and hare cycle detection](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_Tortoise_and_Hare)
algorithm. The way the algorithm works is that there is a slow pointer and
a fast point and as soon as both pointers reference the same node, there's
a cycle.  Usually, the fast pointer skips every other node, so that if there
is a cycle, it will be detected in `2n` iterations, where `n` is the number
of nodes in the list.

However, our problem is a slight variation on that.  We're not just trying
to detect a cycle, but we're trying to figure out where it starts.

This is where we need to get creative.  If the slow pointer and the fast
pointer reference the same node, the only thing we really know is **that**
node is somewhere in the cycle.  If the last node links back to the head
of the list, we're out of luck because the entire list is a giant loop.

_Great._

So what do we know?  The slow pointer traverses one node at a time, so let's
set the fast pointer to the head of the list.  If we iterate using both
pointers (one link at a time), eventually they will reference the same node
again (because there is a cycle)... and since the fast pointer was re-
initialized to the head of the list, the slow pointer is now `x` steps past
the head of the list... or at the first node in list that's part of the cycle.
