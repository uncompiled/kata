function substringConcatenation (string, list) {
  let results = []
  if (!string || !list || string.length === 0 || list.length === 0) {
    return results
  }

  let numWords = list.length
  let wordLength = list[0].length
  let words = new Map()

  list.forEach(word => {
    let frequency = 1
    if (words.has(word)) frequency = words.get(word) + 1
    words.set(word, frequency)
  })

  for (let i = 0; i <= string.length - wordLength * numWords; i++) {
    // Initialize a new Map of words
    let seen = new Map(words)
    // Iterate over the number of words in the list
    for (let j = 0; j < numWords; j++) {
      let start = i + j * wordLength
      let word = string.substring(start, start + wordLength)
      // If we see one of the words in the substring,
      // decrement the frequency from seen.
      if (seen.has(word)) {
        let frequency = seen.get(word)
        if (frequency === 1) {
          seen.delete(word)
        } else {
          seen.set(word, frequency - 1)
        }
      } else {
        break
      }
    }

    // If all the words in the list are present,
    // then save the current position of the input string
    if (seen.size === 0) {
      results.push(i)
    }
  }

  return results
}

module.exports = substringConcatenation
