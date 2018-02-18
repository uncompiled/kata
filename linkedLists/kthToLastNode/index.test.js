const LinkedList = require('../../utils/linkedList')
const kthToLastNode = require('../kthToLastNode')

test('example should work', () => {
  let list = new LinkedList()
  let head = list.push(1)
  list.push(5)
  list.push(10)
  list.push(15)
  list.push(20)

  expect(kthToLastNode(head, 1).get()).toEqual(20)
  expect(kthToLastNode(head, 2).get()).toEqual(15)
  expect(kthToLastNode(head, 3).get()).toEqual(10)
  expect(kthToLastNode(head, 4).get()).toEqual(5)
})

test('invalid index returns undefined', () => {
  let list = new LinkedList()
  let head = list.push(5)

  expect(kthToLastNode(head, 1).get()).toEqual(5)
  expect(kthToLastNode(head, 2)).toBeUndefined()
  expect(kthToLastNode(head, 3)).toBeUndefined()
  expect(kthToLastNode(head, 4)).toBeUndefined()
})
