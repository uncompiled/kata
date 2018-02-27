const Heap = require('../heap')

test('empty heap works', () => {
  let heap = new Heap()

  expect(heap.isEmpty()).toEqual(true)
  expect(heap.peek()).toBeUndefined()
  expect(heap.pop()).toBeUndefined()
})

test('single item maxHeap works', () => {
  let heap = new Heap()
  heap.push(1)

  expect(heap.isEmpty()).toEqual(false)
  expect(heap.peek()).toEqual(1)

  expect(heap.pop()).toEqual(1)
  expect(heap.isEmpty()).toEqual(true)
  expect(heap.peek()).toBeUndefined()
})

test('multiple item maxHeap works', () => {
  let heap = new Heap()
  const input = [1, 2, 3, 5, 10]
  const expected = [10, 5, 2, 1, 3]

  input.forEach(value => heap.push(value))
  expect(heap.isEmpty()).toEqual(false)
  expect(heap.peek()).toEqual(10)
  expect(heap.toArray()).toEqual(expected)

  expect(heap.pop()).toEqual(10)
  expect(heap.pop()).toEqual(5)
  expect(heap.pop()).toEqual(3)
  expect(heap.pop()).toEqual(2)
  expect(heap.pop()).toEqual(1)
  expect(heap.pop()).toBeUndefined()
  expect(heap.isEmpty()).toEqual(true)
})

test('multiple item minHeap works', () => {
  let heap = new Heap((x, y) => y - x)
  const input = [10, 1, 5, 3, 2]
  const expected = [1, 2, 5, 10, 3]

  input.forEach(value => heap.push(value))
  expect(heap.isEmpty()).toEqual(false)
  expect(heap.peek()).toEqual(1)
  expect(heap.toArray()).toEqual(expected)

  expect(heap.pop()).toEqual(1)
  expect(heap.pop()).toEqual(2)
  expect(heap.pop()).toEqual(3)
  expect(heap.pop()).toEqual(5)
  expect(heap.pop()).toEqual(10)
  expect(heap.pop()).toBeUndefined()
  expect(heap.isEmpty()).toEqual(true)
})
