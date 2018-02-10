class Queue {
  constructor () {
    this.in = []
    this.out = []
  }

  enqueue (value) {
    this.in.push(value)
    return this
  }

  dequeue () {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop())
      }
    }

    // If this.out is empty, stack.pop() will return undefined
    return this.out.pop()
  }
}

module.exports = Queue
