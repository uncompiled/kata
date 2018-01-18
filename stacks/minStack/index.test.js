const MinStack = require('../minStack')

test('retrieval from empty stack is undefined', () => {
  let minStack = new MinStack()
  expect(minStack.pop()).toBeUndefined()
  expect(minStack.top()).toBeUndefined()
  expect(minStack.min()).toBeUndefined()
})

test('minimum value should still be 1 after some operations', () => {
  let minStack = new MinStack()

  minStack
    .push(1)
    .push(2)
    .push(3)
    .push(4)

  // Minimum value should be 1
  expect(minStack.min()).toEqual(1)

  // Pop off the top
  expect(minStack.top()).toEqual(4)
  expect(minStack.pop()).toEqual(4)
  expect(minStack.top()).toEqual(3)
  expect(minStack.pop()).toEqual(3)

  minStack.push(4).push(5)

  expect(minStack.toArray()).toEqual([1, 2, 4, 5])

  // Minimum value should still be 1 after some operations
  expect(minStack.min()).toEqual(1)
})

test('MinStack.min should be much faster than brute force iteration', () => {
  let minStack = new MinStack()
  let array = []

  // Generate 1 million elements in reverse order.
  for (let i = 1000000; i > 0; i--) {
    minStack.push(i)
    array.push(i)
  }

  // Get the MinStack.min()
  let start = process.hrtime()
  let minStackMin = minStack.min()
  let minStackTime = process.hrtime(start)[1]

  // Get the array min by iterating through the entire array.
  start = process.hrtime()
  // Using Math.min(...array) blows up the stack
  let arrayMin = Number.MAX_VALUE
  for (let i = 0; i < array.length; i++) {
    if (array[i] < arrayMin) {
      arrayMin = array[i]
    }
  }
  let arrayTime = process.hrtime(start)[1]

  // Minimum values should be the same
  expect(minStackMin).toEqual(arrayMin)
  // MinStack should be significantly faster than Array search
  expect(minStackTime).toBeLessThan(arrayTime)
})
