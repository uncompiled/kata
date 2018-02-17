const BinaryTree = require('../../utils/binaryTree')
const lca = require('../lca')

test('empty tree has undefined LCA', () => {
  let tree = new BinaryTree()
  expect(lca(tree.root, 0, 1)).toBeUndefined()
})

test('LCA of 5 and 15 is 10', () => {
  let tree = new BinaryTree()
  tree.insert(10)
  tree.insert(5)
  tree.insert(15)

  expect(lca(tree.root, 5, 15)).toEqual(10)
})

test('LCA of 5 and 15 is 10', () => {
  let tree = new BinaryTree()
  let input = [50, 30, 70, 20, 40, 60, 80]
  input.forEach(value => {
    tree.insert(value)
  })

  expect(lca(tree.root, 30, 70)).toEqual(50)
  expect(lca(tree.root, 20, 40)).toEqual(30)
  expect(lca(tree.root, 60, 80)).toEqual(70)
  expect(lca(tree.root, 10, 80)).toBeUndefined()
})
