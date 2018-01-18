class MinStack {
  constructor () {
    this.stack = []
    this.minimum = []
  }

  push (value) {
    this.stack.push(value)

    if (this.minimum.length === 0) {
      // If it's empty, push the new value to the minimum stack.
      this.minimum.push(value)
    } else {
      // Push the smaller of the two values to the minimum stack.
      this.minimum.push(Math.min(value, this.minimum[this.minimum.length - 1]))
    }

    // Make the push method chainable.
    return this
  }

  pop () {
    if (this.stack.length > 0) {
      this.minimum.pop()
      return this.stack.pop()
    }

    return undefined
  }

  top () {
    // Return the top item of the actual stack
    return this.stack ? this.stack[this.stack.length - 1] : undefined
  }

  min () {
    // Return the top item in the minimum stack
    return this.stack ? this.minimum[this.minimum.length - 1] : undefined
  }

  toArray () {
    return this.stack.slice()
  }
}

module.exports = MinStack
