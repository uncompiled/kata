function hasRedundantBraces (input) {
  const validOperators = new Set(['+', '-', '*', '/'])
  let stack = []

  for (let i = 0; i < input.length; i++) {
    let token = input[i]
    if (token === '(') {
      stack.push(token)
    } else if (token === ')') {
      if (stack.length > 0 && stack[stack.length - 1] === 'expression') {
        stack.pop() // remove the expression
        stack.pop() // remove the matching parens
      } else {
        return true
      }
    } else if (validOperators.has(token)) {
      stack.push('expression')
    }
  }

  return false
}

module.exports = hasRedundantBraces
