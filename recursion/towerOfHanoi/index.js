function towerOfHanoi (numDisks) {
  function move (disksToMove, source, destination, auxiliary) {
    if (disksToMove > 0) {
      // Move n-1 disks from source to auxiliary tower so they're out of the way
      move(disksToMove - 1, source, auxiliary, destination)
      // Move the disk from source to target
      pegs[destination].push(pegs[source].pop())
      moves.push([source, destination])
      // Move n-1 disks from the auxiliary tower back to the target
      move(disksToMove - 1, auxiliary, destination, source)
    }
  }

  // Initialize towers
  let pegs = [[...Array(5).keys()].map(x => x + 1), [], []]
  // Save all of the moves
  let moves = []
  move(numDisks, 0, 1, 2)
  return moves
}

module.exports = towerOfHanoi
