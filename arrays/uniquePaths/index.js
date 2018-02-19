function uniquePaths (grid) {
  let rows = grid.length
  let cols = grid[0].length
  let paths = new Array(rows).fill([]).map(() => new Array(cols).fill(0))

  // Initialize starting position
  if (canMove(grid[0][0])) paths[0][0] = 1

  // Initialize the first column
  for (let row = 1; row < rows; row++) {
    if (canMove(grid[row][0])) paths[row][0] = paths[row - 1][0]
  }

  for (let col = 1; col < cols; col++) {
    if (canMove(grid[0][col])) paths[0][col] = paths[0][col - 1]
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (canMove(grid[row][col])) {
        paths[row][col] = paths[row - 1][col] + paths[row][col - 1]
      }
    }
  }

  // Return the number of paths in the end position
  return paths[rows - 1][cols - 1]
}

function canMove (coordinate) {
  return coordinate === 0
}

module.exports = uniquePaths
