function rpn (expression) {
  let stack = []
  for (let token of expression) {
    if (isOperator(token)) {
      let right = parseInt(stack.pop())
      let left = parseInt(stack.pop())
      stack.push(evaluate(left, token, right))
    } else {
      stack.push(token)
    }
  }

  let result = parseInt(stack.pop())
  return isNaN(result) ? undefined : result
}

function isOperator (token) {
  return token === '+' || token === '-' || token === '*' || token === '/'
}

function evaluate (left, token, right) {
  switch (token) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
  }
}

module.exports = rpn
