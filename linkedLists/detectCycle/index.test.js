const LinkedList = require('../../utils/linkedList')
const detectCycle = require('../detectCycle')

test('list without a cycle returns null', () => {
  let list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)

  expect(detectCycle(list._head)).toBeNull()
})

test('cycle detection works', () => {
  // Bastardize a list to make a cycle
  let list = new LinkedList()
  list.push(1)
  list.push(2)
  let node3 = list.push(3)
  let node4 = list.push(4)

  // You should never do this, but YOLO:
  // Let's create a cycle.
  node4.setNextTo(node3)

  expect(detectCycle(list._head)).toEqual(3)
})
