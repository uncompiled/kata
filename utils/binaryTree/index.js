class TreeNode {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor () {
    this.root = null
    this.length = 0
  }

  isEmpty () {
    return this.length === 0
  }

  insert (value) {
    let node = new TreeNode(value)
    this.length++

    if (!this.root) {
      return (this.root = node)
    }

    function _insert (current, newNode) {
      if (newNode.value < current.value) {
        !current.left
          ? (current.left = newNode)
          : _insert(current.left, newNode)
      } else {
        !current.right
          ? (current.right = newNode)
          : _insert(current.right, newNode)
      }
    }

    _insert(this.root, node)

    return this
  }

  toArray () {
    let array = []

    function _traverse (node) {
      if (!node) return

      if (node.left) _traverse(node.left)
      array.push(node.value)
      if (node.right) _traverse(node.right)
    }

    _traverse(this.root)
    return array
  }
}

module.exports = BinaryTree
