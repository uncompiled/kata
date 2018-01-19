const BinaryTree = require('../binaryTree')

test('new tree should be empty', () => {
  let tree = new BinaryTree()
  expect(tree.length).toEqual(0)
  expect(tree.isEmpty()).toBe(true)
  expect(tree.toArray()).toEqual([])
  expect(tree.height()).toEqual(0)
})

test('insert one item', () => {
  let tree = new BinaryTree()
  let value = 10

  tree.insert(value)

  expect(tree.length).toEqual(1)
  expect(tree.isEmpty()).toBe(false)
  expect(tree.toArray()).toEqual([value])
  expect(tree.height()).toEqual(1)
})

test('insert one item larger than root', () => {
  let tree = new BinaryTree()
  let input = [10, 15]

  for (let i = 0; i < input.length; i++) {
    tree.insert(input[i])
  }

  expect(tree.length).toEqual(input.length)
  expect(tree.isEmpty()).toBe(false)
  expect(tree.toArray()).toEqual(input)

  expect(tree.root.left).toBeNull()
  expect(tree.root.right).toBeDefined()
  expect(tree.height()).toEqual(2)
})

test('insert one item smaller than root', () => {
  let tree = new BinaryTree()
  let input = [10, 5]

  for (let i = 0; i < input.length; i++) {
    tree.insert(input[i])
  }

  expect(tree.length).toEqual(input.length)
  expect(tree.isEmpty()).toBe(false)
  expect(tree.toArray()).toEqual(input.reverse())

  expect(tree.root.left).toBeDefined()
  expect(tree.root.right).toBeNull()
  expect(tree.height()).toEqual(2)
})

test('insert one item smaller and one item larger than root', () => {
  let tree = new BinaryTree()
  let input = [22, 11, 33]

  for (let i = 0; i < input.length; i++) {
    tree.insert(input[i])
  }

  expect(tree.length).toEqual(input.length)
  expect(tree.isEmpty()).toBe(false)
  expect(tree.toArray()).toEqual([11, 22, 33])

  expect(tree.root.left).toBeDefined()
  expect(tree.root.right).toBeDefined()
  expect(tree.height()).toEqual(2)
})

test('insert multiple items', () => {
  let tree = new BinaryTree()
  let input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  for (let i = 0; i < input.length; i++) {
    tree.insert(input[i])
  }

  expect(tree.length).toEqual(input.length)
  expect(tree.isEmpty()).toBe(false)
  expect(tree.toArray()).toEqual(input.reverse())
  expect(tree.height()).toEqual(10)
})
