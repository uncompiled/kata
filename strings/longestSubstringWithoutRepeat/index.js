function longestSubstringWithoutRepeat (string) {
  let n = string.length
  let maxLength = 0
  let seen = {}

  let start = 0
  let end = 0

  while (end < n) {
    let char = string.charAt(end)
    if (char in seen) {
      // If this character has already been seen,
      // update the start of the longest substring.
      start = Math.max(start, seen[char])
    }

    maxLength = Math.max(maxLength, end - start + 1)
    seen[char] = end + 1
    end++
  }

  return maxLength
}

module.exports = longestSubstringWithoutRepeat
