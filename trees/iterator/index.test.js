const BinarySearchTree = require('../../utils/binaryTree')
const BSTIterator = require('../iterator')

test('empty tree iterator works', () => {
  let tree = new BinarySearchTree()

  let iterator = new BSTIterator(tree.root)
  let result = []
  while (iterator.hasNext()) {
    result.push(iterator.next())
  }

  expect(result).toEqual([])
})

test('single item tree iterator works', () => {
  let tree = new BinarySearchTree()
  tree.insert(5)

  let iterator = new BSTIterator(tree.root)
  let result = []
  while (iterator.hasNext()) {
    result.push(iterator.next())
  }

  expect(result).toEqual([5])
})

test('larger binary search tree iterator works', () => {
  let tree = new BinarySearchTree()
  let input = [50, 10, 90, 20, 80, 30, 70, 40, 60]
  input.forEach(value => {
    tree.insert(value)
  })

  let iterator = new BSTIterator(tree.root)
  let result = []
  while (iterator.hasNext()) {
    result.push(iterator.next())
  }

  expect(result).toEqual(input.sort())
})
