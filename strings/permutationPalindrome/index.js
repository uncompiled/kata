function permutationPalindrome (string) {
  let seen = new Set()
  for (let char of string) {
    seen.has(char) ? seen.delete(char) : seen.add(char)
  }

  return seen.size <= 1
}

module.exports = permutationPalindrome
