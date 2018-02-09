# Tower of Hanoi

The Tower of Hanoi is a puzzle game where you have three towers and a number
of disks of different sizes.

The game starts with all of the disks in ascending order on one tower
(with the largest on the bottom and the smallest on the top).

The objective is to move all of the disks to another tower, but you must obey
the following rules:

- Only one disk can be moved at a time
- During each move you can only move the top element of one of the stacks
- No disk can be placed on top of a smaller disk

## Example

Beginning State: 3 disks on first tower

```
  [ || ]         ||           ||
 [  ||  ]        ||           ||
[   ||   ]       ||           ||
==========================================
```

End State: 3 disks on last tower

```
    ||           ||         [ || ]
    ||           ||        [  ||  ]
    ||           ||       [   ||   ]
==========================================
```

## Thoughts

This can be modeled using three stacks, which represent the three towers:

- `source` stack is where the disks originally start
- `target` stack is where we want to move the disks
- `auxiliary` stack is the intermediate tower used for shuffling

