function runLengthEncoding (string) {
  if (!string || string.length < 2) return string

  let encoded = []

  let count = 1
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      encoded.push(count)
      encoded.push(string[i - 1])
      count = 1
    } else {
      count++
    }

    // Dump the last character sequence
    if (i === string.length - 1) {
      encoded.push(count)
      encoded.push(string[i])
    }
  }

  return encoded.length <= string.length ? encoded.join('') : string
}

module.exports = runLengthEncoding
