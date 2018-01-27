# [Graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))

A graph is a set of vertices and edges:

- Vertices may be connected to each other via edges
- Edges may be undirected or directed

Graphs are used in a lot of applications, such as computer networks
(routing) and showing relationships between items.  Graph databases
are one way of representing data (as an alternative to relational DBs
or document DBs).  Graphs are also good for social networks, like
showing a connection between a person and their friends (or other entities).

This exercise is to implement a graph, which will be later used to implement
some general graph problems.

## Example

```
  Directed Graph            Undirected Graph
┌───┐       ┌───┐          ┌───┐       ┌───┐
│ A │──────▶│ B │          │ A │◀─────▶│ B │
└───┘       └───┘          └───┘       └───┘
  │           ▲              ▲           ▲
  │           │              │           │
  │   ┌───┐   │              │   ┌───┐   │
  └──▶│ C │───┘              └──▶│ C │◀──┘
      └───┘                      └───┘
```

In the directed graph:

- A has a path to B
- A has a path to C
- C has a path to B

In the undirected graph, the edges go in both directions:

- A has a path to B
- A has a path to C
- C has a path to A
- C has a path to B
- B has a path to C
- B has a path to A

An undirected path can be implemented by creating two edges:
- `source` to `destination`
- `destination` to `source`

## Thoughts

There are two primary ways to implement a graph:
- adjacency list
- adjacency matrix

There are two primary ways to traverse a graph:
- [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search)
