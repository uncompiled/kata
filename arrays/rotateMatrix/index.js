function rotate (matrix) {
  let n = matrix.length

  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let backup = matrix[i][j]
      let cornerOne = n - i - 1
      let cornerTwo = n - j - 1

      matrix[i][j] = matrix[cornerTwo][i]
      matrix[cornerTwo][i] = matrix[cornerOne][cornerTwo]
      matrix[cornerOne][cornerTwo] = matrix[j][cornerOne]
      matrix[j][cornerOne] = backup
    }
  }

  return matrix
}

module.exports = rotate
