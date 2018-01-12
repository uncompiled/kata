function zip (matrix) {
  const n = matrix.length
  // Get the length of the longest array
  const maxLength = Math.max(...matrix.map(x => x.length))

  // Create n arrays of length = longest array and
  // fill them with the values from the original matrix
  return Array.from({ length: maxLength }).map((_, a) =>
    Array.from({ length: n }, (_, b) => matrix[b][a])
  )
}

module.exports = zip
