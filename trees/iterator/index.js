class BSTIterator {
  constructor (root) {
    this.stack = []
    let curr = root
    while (curr) {
      this.stack.push(curr)
      curr = curr.left
    }
  }

  hasNext () {
    return this.stack.length > 0
  }

  next () {
    let node = this.stack.pop()
    let result = node.value
    if (node.right) {
      node = node.right
      while (node) {
        this.stack.push(node)
        node = node.left
      }
    }
    return result
  }
}

module.exports = BSTIterator
