function isAnagram (a, b) {
  let frequency = new Map()

  a = a.toLowerCase()
  b = b.toLowerCase()

  // Count the character frequencies in string a
  for (let i = 0; i < a.length; i++) {
    let char = a.charCodeAt(i)
    if (isValid(char)) {
      frequency.has(char)
        ? frequency.set(char, frequency.get(char) + 1)
        : frequency.set(char, 0)
    }
  }

  // Validate that the characters in string b cancel out
  for (let j = 0; j < b.length; j++) {
    let char = b.charCodeAt(j)
    if (isValid(char)) {
      if (frequency.has(char)) {
        frequency.get(char) === 0
          ? frequency.delete(char)
          : frequency.set(char, frequency.get(char) - 1)
      } else {
        // there's a valid character in b that's not in a
        return false
      }
    }
  }

  return frequency.size === 0
}

/**
 * isValid takes a charCode and determines whether it's a character that we care about
 * @param {*} charCode
 */
function isValid (charCode) {
  return (
    (charCode > 47 && charCode < 58) || // numbers
    (charCode > 64 && charCode < 91) || // lowercase letters
    (charCode > 96 && charCode < 123) // uppercase letters
  )
}

module.exports = isAnagram
