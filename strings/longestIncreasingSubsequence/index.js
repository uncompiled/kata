function longestIncreasingSubsequence (str) {
  if (!str || str.length < 1) {
    return 0
  }

  let n = str.length

  // Each character is an increasing subsequence of length 1
  let lis = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (str[j] < str[i] && lis[i] < lis[j] + 1) {
        // The longest increasing subsequence at position i
        // is the count of increasing numbers from 0 to i
        lis[i] = lis[j] + 1
      }
    }
  }

  return Math.max(...lis)
}

module.exports = longestIncreasingSubsequence
