const Queue = require('../queueStack')

test('empty queue should return undefined', () => {
  let queue = new Queue()
  expect(queue.dequeue()).toBeUndefined()
})

test('single item in queue should return that item', () => {
  let queue = new Queue()
  queue.enqueue(1)
  expect(queue.dequeue()).toEqual(1)
})

test('items should be retrieved in FIFO order', () => {
  let queue = new Queue()

  queue.enqueue(1).enqueue(2)
  expect(queue.dequeue()).toEqual(1)

  queue.enqueue(3).enqueue(4)
  expect(queue.dequeue()).toEqual(2)
  expect(queue.dequeue()).toEqual(3)
  expect(queue.dequeue()).toEqual(4)
  expect(queue.dequeue()).toBeUndefined()

  queue.enqueue(5).enqueue(6)
  expect(queue.dequeue()).toEqual(5)
  expect(queue.dequeue()).toEqual(6)
  expect(queue.dequeue()).toBeUndefined()
})
