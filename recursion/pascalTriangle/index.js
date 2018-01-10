function pascalTriangle (n) {
  let rows = []

  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        row.push(1)
      } else {
        row.push(rows[i - 1][j - 1] + rows[i - 1][j])
      }
    }
    rows.push(row)
  }

  return rows
}

module.exports = pascalTriangle
