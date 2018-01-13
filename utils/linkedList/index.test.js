const LinkedList = require('../linkedList')

test('constructor creates empty list', () => {
  let list = new LinkedList()
  expect(list.isEmpty()).toEqual(true)
  expect(list._head).toBeNull()
  expect(list._last).toBeNull()
})

test('push a single item', () => {
  let list = new LinkedList()
  list.push(1)

  // one item should be in the list
  expect(list.length).toEqual(1)
  expect(list._head).toBeDefined()
  expect(list._last).toBeDefined()

  // head and last item should be the same
  expect(list.head()).toEqual(1)
  expect(list.last()).toEqual(1)
})

test('prepend a single item', () => {
  let list = new LinkedList()
  list.push(1, { prepend: true })

  // one item should be in the list
  expect(list.length).toEqual(1)
  expect(list._head).toBeDefined()
  expect(list._last).toBeDefined()

  // head and last item should be the same
  expect(list.head()).toEqual(1)
  expect(list.last()).toEqual(1)
})

test('push should append in order', () => {
  let list = new LinkedList()

  list.push(1)
  list.push(2)
  list.push(3)

  expect(list.length).toEqual(3)
  expect(list._head).toBeDefined()
  expect(list._last).toBeDefined()

  expect(list.head()).toEqual(1)
  expect(list.last()).toEqual(3)

  let array = list.toArray()
  expect(array).toEqual([1, 2, 3])

  let reversed = list.toArray({ reverse: true })
  expect(reversed).toEqual([3, 2, 1])
})

test('prepend should insert in reverse order', () => {
  let list = new LinkedList()
  let prepend = { prepend: true }

  list.push(1, prepend)
  list.push(2, prepend)
  list.push(3, prepend)

  expect(list.length).toEqual(3)
  expect(list._head).toBeDefined()
  expect(list._last).toBeDefined()

  expect(list.head()).toEqual(3)
  expect(list.last()).toEqual(1)

  let array = list.toArray()
  expect(array).toEqual([3, 2, 1])

  let reversed = list.toArray({ reverse: true })
  expect(reversed).toEqual([1, 2, 3])
})

test('pop list until empty', () => {
  let n = 10
  let list = new LinkedList()

  expect(list.pop()).toBeUndefined()

  // generate a list with numbers
  for (let i = 1; i <= n; i++) {
    list.push(i)
  }

  // empty the list using the pop method
  for (let i = n; i >= 1; i--) {
    expect(list.length).toEqual(i)
    expect(list.pop()).toEqual(i)
  }

  expect(list.isEmpty()).toBe(true)

  list.push('a')
  list.push('b')
  list.push('c')
  expect(list.length).toEqual(3)
  expect(list.toArray()).toEqual(['a', 'b', 'c'])
})

test('shift list until empty', () => {
  let n = 10
  let list = new LinkedList()

  expect(list.shift()).toBeUndefined()

  // generate a list with numbers
  for (let i = 0; i < n; i++) {
    list.push(i)
  }

  // empty the list using the shift method
  for (let i = n; i >= 1; i--) {
    expect(list.length).toEqual(i)
    expect(list.shift()).toEqual(n - i)
  }

  expect(list.isEmpty()).toBe(true)

  list.push('a')
  list.push('b')
  list.push('c')
  expect(list.length).toEqual(3)
  expect(list.toArray()).toEqual(['a', 'b', 'c'])
})

test('get element at specific position', () => {
  let list = new LinkedList()

  expect(list.get(-1)).toBeUndefined()
  expect(list.get(0)).toBeUndefined()
  expect(list.get(10)).toBeUndefined()

  for (let i = 0; i < 100; i += 5) {
    list.push(i)
  }

  expect(list.length).toEqual(20)

  for (let i = 0; i < list.length; i++) {
    expect(list.get(i)).toEqual(5 * i)
  }
})

test('find method returns correct result for value search', () => {
  let list = new LinkedList()

  for (let i = 0; i < 100; i += 10) {
    list.push(i)
  }

  expect(list.find(0)).toBe(true)
  expect(list.find(3)).toBe(false)
  expect(list.find(20)).toBe(true)
  expect(list.find(27)).toBe(false)
})

test('promote method correctly moves specified node to the head', () => {
  let list = new LinkedList()

  let node1 = list.push(1)
  let node2 = list.push(2)
  let node3 = list.push(3)

  list.promote(node1)
  expect(list.head()).toBe(1)

  list.promote(node3)
  expect(list.head()).toBe(3)

  list.promote(node2)
  expect(list.head()).toBe(2)

  let array = list.toArray()
  expect(array).toEqual([2, 3, 1])
})
