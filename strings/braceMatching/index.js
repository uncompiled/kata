const braces = {
  '(': ')',
  '[': ']',
  '{': '}'
}

function matchBraces (input, position) {
  if (input[position] in braces) {
    return findMatch(input, position)
  }
  return position
}

function findMatch (input, position) {
  let needed = []

  for (let i = position; i < input.length; i++) {
    if (input[i] in braces) {
      needed.push(braces[input[i]])
    } else {
      let requiredBracket = needed[needed.length - 1]
      if (input[i] === requiredBracket) {
        needed.pop()
        if (needed.length === 0) return i
      }
    }
  }

  throw new Error('No matching bracket!')
}

module.exports = matchBraces
