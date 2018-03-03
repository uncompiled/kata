# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

The Game of Life is a cellular automaton which was invented by
John Horton Conway.

It's not really a game, but it takes a "world" that consists of tiles
that are either alive or dead (a matrix with ones and zeroes).

The evolution of that world depends on the initial state, so what's
interesting is how the state of the world changes over time.

The rules of this world are as follows:

- Any live cell with `< 2` live neighbors will die
- Any live cell with `2 - 3` live neighbors stays alive
- Any live cell with `> 3` live neighbors will die
- Any dead cell with `3` live neighbors becomes alive

## Example

Given the rules, some interesting patterns appear.
I will not discuss all of them, but they are useful as examples.

### Blinker

The blinker oscillates between two states.

Initial state:

```
[
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
```

Next state:

```
[
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
```

Because of the way the rules are setup, the next state is the initial state.

### Thoughts

The initial state is the `seed` and the algorithm can be considered
an iterator or generator function that captures the transition from
`state(t) -> state(t + 1)` and outputs the next state of the world.
