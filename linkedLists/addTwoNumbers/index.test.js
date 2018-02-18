const LinkedList = require('../../utils/linkedList')
const add = require('../addTwoNumbers')

test('1 + empty list = 1', () => {
  let list1 = new LinkedList()
  list1.push(1)

  let list2 = new LinkedList()

  let sum = add(list1._head, list2._head)
  expect(sum.length).toEqual(1)
  expect(sum.head()).toEqual(1)
})

test('1 + 1 = 2', () => {
  let list1 = new LinkedList()
  list1.push(1)

  let list2 = new LinkedList()
  list2.push(1)

  let sum = add(list1._head, list2._head)
  expect(sum.length).toEqual(1)
  expect(sum.head()).toEqual(2)
})

test('342 + 465 = 807', () => {
  let list1 = new LinkedList()
  list1.push(2)
  list1.push(4)
  list1.push(3)
  // (2 -> 4 -> 3) == 342

  let list2 = new LinkedList()
  list2.push(5)
  list2.push(6)
  list2.push(4)
  // (5 -> 6 -> 4) == 465

  let sum = add(list1._head, list2._head)
  expect(sum.length).toEqual(3)
  expect(sum.toArray()).toEqual([7, 0, 8])
})

test('199 + 1 = 200', () => {
  let list1 = new LinkedList()
  list1.push(9)
  list1.push(9)
  list1.push(1)
  // (9 -> 9 -> 1) == 199

  let list2 = new LinkedList()
  list2.push(1)
  // (1) == 1

  let sum = add(list1._head, list2._head)
  expect(sum.length).toEqual(3)
  expect(sum.toArray()).toEqual([0, 0, 2])
})
