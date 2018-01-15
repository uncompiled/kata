# Light Bulbs

`n` light bulbs are connected by a wire. Each bulb has a switch associated
with it, however due to faulty wiring, a switch also changes the state of
all the bulbs to the right of current bulb.

Given an array containing the initial state of all bulbs, find the minimum
number of switches you have to press to turn on all the bulbs.

You can press the same switch multiple times.

## Example

Given an array `[false, true, false, true]`, this input represents the
following light bulb setup:

```
┌─────┐  ┌────┐  ┌─────┐  ┌────┐
│ off │--│ on │--│ off │--│ on │
└─────┘  └────┘  └─────┘  └────┘
```

After pressing the following sequences of switches:

- Flipping switch 0 gives us: `[true, false, true,  false]`
- Flipping switch 1 gives us: `[true, true,  false, true]`
- Flipping switch 2 gives us: `[true, true,  true,  false]`
- Flipping switch 3 gives us: `[true, true,  true,  true]`

## Thoughts

If we iterate through the array sequentially, we can flip every
switch that is currently off.

If you flip a switch two times, it reverts to the original state.

This means that we will never have to flip more than `n` switches,
so we _should_ be able to solve this in linear time.

If we actually flip the light bulbs following the current bulb,
the runtime complexity is actually not linear, but quadratic.

We don't actually have to modify the state of every element following
the current bulb. We can use a boolean variable to store the current
state of the system -- whether the following light bulbs are flipped.

This works because we noticed that flipping a switch two times returns
the light bulb to it's original state, so we don't actually have to
ever change the state of that switch.
