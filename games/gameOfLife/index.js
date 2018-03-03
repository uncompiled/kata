function gameOfLife (state) {
  const alive = (x, y) => state[x] && state[x][y]
  const neighbors = (x, y) => {
    let count = 0
    if (alive(x - 1, y - 1)) count++
    if (alive(x - 1, y)) count++
    if (alive(x - 1, y + 1)) count++
    if (alive(x, y - 1)) count++
    if (alive(x, y + 1)) count++
    if (alive(x + 1, y - 1)) count++
    if (alive(x + 1, y)) count++
    if (alive(x + 1, y + 1)) count++
    return count
  }

  return state.map((r, x) => {
    return r.map((_, y) => {
      let n = neighbors(x, y)
      return (alive(x, y) ? n > 1 && n < 4 : n === 3) ? 1 : 0
    })
  })
}

module.exports = gameOfLife
