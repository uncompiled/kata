function longestCommonSubstring (a, b) {
  let maxLength = 0
  let lcs = Array(a.length)
    .fill([])
    .map(() => Array(b.length).fill(0))

  lcs.forEach((row, j) =>
    row.forEach((_, i) => {
      if (a[j] === b[i]) {
        lcs[i][j] = i && j ? lcs[i - 1][j - 1] + 1 : 1
        maxLength = Math.max(maxLength, lcs[i][j])
      } else {
        lcs[i][j] = 0
      }
    })
  )

  return [].concat
    .apply(
      [],
      lcs.map((row, _) =>
        row.map((substringLength, i) => {
          return substringLength === maxLength
            ? a.slice(i - (maxLength - 1), i + 1)
            : null
        })
      )
    )
    .filter(s => s)
}

module.exports = longestCommonSubstring
