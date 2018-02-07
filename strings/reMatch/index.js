function isMatch (pattern, text) {
  if (pattern.length === 0) return text.length === 0

  if (matchSingle(pattern)) {
    return !prefixMatches(pattern, text) && !dotMatches(pattern, text)
      ? false
      : isMatch(pattern.slice(1), text.slice(1))
  } else {
    // If the next character is a Kleene star, so test and chomp.
    while (prefixMatches(pattern, text) || dotMatches(pattern, text)) {
      if (isMatch(pattern.slice(2), text)) return true
      text = text.slice(1)
    }
    return isMatch(pattern.slice(2), text)
  }
}

module.exports = isMatch

function prefixMatches (pattern, text) {
  return text[0] === pattern[0]
}

function dotMatches (pattern, text) {
  return pattern[0] === '.' && text.length > 0
}

function matchSingle (pattern) {
  return pattern[1] !== '*'
}
