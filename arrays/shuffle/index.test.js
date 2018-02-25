const shuffle = require('../shuffle')

test('single item array returns identity', () => {
  expect(shuffle([1])).toEqual([1])
})

test('each input element only appears once', () => {
  let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // Shuffle a clone of the input for easier testing
  let output = shuffle(input.slice(0))

  expect(output).toHaveLength(input.length)

  input.forEach(inputItem => {
    // Each input item should only appear once.
    expect(output.filter(element => element === inputItem)).toHaveLength(1)
  })
})
