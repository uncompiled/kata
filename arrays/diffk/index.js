function diffk (array, k) {
  let sorted = array.sort()
  let n = array.length
  let i = 0
  let j = 1

  while (i < n && j < n) {
    if (i !== j && sorted[j] - sorted[i] === k) {
      return true
    } else if (sorted[j] - sorted[i] < k) {
      j++
    } else {
      // sorted[j] - sorted[i] > k, so fix j and increment i
      i++
    }
  }

  // Exhausted search, so return false
  return false
}

module.exports = diffk
