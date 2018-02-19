const LinkedList = require('../../utils/linkedList')

test('invalid parameters should throw error', () => {
  let list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)

  expect(() => {
    list.reverseFrom(-1, 3)
  }).toThrow()

  expect(() => {
    list.reverseFrom(1, 4)
  }).toThrow()

  expect(() => {
    list.reverseFrom(5, 3)
  }).toThrow()
})

test('reverse entire list', () => {
  let list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(5)

  let result = list.reverseFrom(1, 5).toArray()
  expect(result).toEqual([5, 4, 3, 2, 1])
})

test('reverse 1, 2, 3, 4, 5 between 2 and 4', () => {
  let list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(5)

  let result = list.reverseFrom(2, 4).toArray()
  expect(result).toEqual([1, 4, 3, 2, 5])
})
