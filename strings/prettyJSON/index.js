const openingBraces = new Set(['[', '{'])
const closingBraces = new Set([']', '}'])
const shouldChangeDepth = new Set([...openingBraces, ...closingBraces])

function prettyJSON (input) {
  let output = []
  let lineBuffer = []
  let depth = 0

  function indent (char) {
    // Updates the depth of the output indentation
    if (char === '[' || char === '{') return depth++
    if (char === ']' || char === '}') return depth--
    return depth
  }

  function flush () {
    // Flush the current line to the output and reset buffer
    let line = lineBuffer.join('')

    // Check for edge cases where we should insert a line break
    for (let j = 0; j < line.length - 1; j++) {
      let curr = line[j]
      let next = line[j + 1]
      if (curr === ':' && openingBraces.has(next)) {
        // If the next character after a colon is an opening
        // brace, then this is a nested object, so put it on
        // the following line...
        output.push('\t'.repeat(depth) + line.slice(0, j + 1))
        output.push('\t'.repeat(depth) + line.slice(j + 1))
        return (lineBuffer = [])
      } else if (closingBraces.has(next)) {
        // If the next character is a closing brace,
        // push it to the next line for vanity.
        output.push('\t'.repeat(depth) + line.slice(0, j + 1))
        indent(next)
        output.push('\t'.repeat(depth) + line.slice(j + 1))
        return (lineBuffer = [])
      }
    }

    output.push('\t'.repeat(depth) + line)
    lineBuffer = []
  }

  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i)
    // Process non-whitespace characters
    if (/\S/.test(char)) {
      lineBuffer.push(char)
      if (shouldBreak(input, i)) {
        flush()
        if (shouldChangeDepth.has(char)) indent(char)
      }
    }
  }

  return output
}

module.exports = prettyJSON

function shouldBreak (input, i) {
  switch (input[i]) {
    case '[':
    case '{':
    case ',':
      return true
    case ']':
    case '}':
      if (i < input.length - 1 && input[i + 1] === ',') return false
      return true
    default:
      return false
  }
}
