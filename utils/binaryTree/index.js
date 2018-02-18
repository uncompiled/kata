const TreeNode = require('./treeNode')

class BinaryTree {
  constructor () {
    this.root = null
    this.length = 0
  }

  isEmpty () {
    return this.length === 0
  }

  /**
   * isIdentical compares every node of the tree for equality
   * @param {BinaryTree} other tree to test for equality
   * @returns {Boolean} true if the other tree is identical to this
   */
  isIdentical (other) {
    function _isIdentical (myNode, yourNode) {
      if (!myNode && !yourNode) return true

      if (myNode && yourNode) {
        let same = myNode.value === yourNode.value
        let left = _isIdentical(myNode.left, yourNode.left)
        let right = _isIdentical(myNode.right, yourNode.right)
        return same && left && right
      }

      return false
    }

    return _isIdentical(this.root, other.root)
  }

  /**
   * isBalanced checks the depth of the left and right
   * subtrees to see if the difference is greater than 1
   */
  isBalanced () {
    const _isBalanced = current => {
      if (!current) return true

      let diff = Math.abs(
        this._height(current.left),
        this._height(current.right)
      )

      let left = _isBalanced(current.left)
      let right = _isBalanced(current.right)

      if (diff <= 1 && left && right) {
        return true
      }

      return false
    }

    return _isBalanced(this.root)
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

  height () {
    return this._height(this.root)
  }

  /** _height is an internal helper function to get the height of a subtree */
  _height (node) {
    if (!node) return 0
    return Math.max(this._height(node.left), this._height(node.right)) + 1
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
