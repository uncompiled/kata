const memoize = require('../memoize')

test('memoized function is faster than brute force recursion', () => {
  const fibonacci = n => {
    if (n === 0 || n === 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  const memoizedFn = memoize(fibonacci)
  let input = 32

  let start = Date.now()
  memoizedFn(input)
  let end = Date.now()
  let bruteForce = end - start

  start = Date.now()
  memoizedFn(input)
  end = Date.now()
  let memoizedTime = end - start

  expect(memoizedTime).toBeLessThan(bruteForce)
})
