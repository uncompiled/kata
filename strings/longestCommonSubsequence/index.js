function longestCommonSubsequence (string1, string2) {
  let s1 = string1.split('')
  let s2 = string2.split('')
  let lcs = Array(s1.length + 1)
    .fill([])
    .map(() => Array(s2.length + 1).fill(0))

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      s1[i - 1] === s2[j - 1]
        ? (lcs[i][j] = lcs[i - 1][j - 1] + 1)
        : (lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]))
    }
  }

  return lcs[s1.length][s2.length]
}

module.exports = longestCommonSubsequence
