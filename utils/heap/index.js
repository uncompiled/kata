class Heap {
  left (index) {
    const leftIndex = 2 * index + 1
    return leftIndex < this.heap.length ? leftIndex : undefined
  }

  right (index) {
    const rightIndex = 2 * index + 2
    return rightIndex < this.heap.length ? rightIndex : undefined
  }

  parent (index) {
    const parentIndex = Math.floor((index + 1) / 2) - 1
    return parentIndex >= 0 ? parentIndex : undefined
  }

  constructor (comparator) {
    this.heap = []
    this.comparator = comparator

    if (typeof this.comparator !== 'function') {
      this.comparator = (x, y) => x - y
    }
  }

  toArray () {
    return this.heap
  }

  isEmpty () {
    return this.heap.length === 0
  }

  peek () {
    return this.heap[0]
  }

  push (value) {
    this.heap.push(value)
    this.bubble(this.heap.length - 1)
  }

  pop () {
    if (this.isEmpty()) return undefined

    let value = this.heap[0]
    let last = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = last
      this.sink(0)
    }

    return value
  }

  shouldSwap (i, j) {
    return this.comparator(this.heap[i], this.heap[j]) > 0
  }

  bubble (index) {
    if (index > 0) {
      let parentIndex = this.parent(index)
      if (this.shouldSwap(index, parentIndex)) {
        this.swap(index, parentIndex)
        this.bubble(parentIndex)
      }
    }
  }

  sink (index) {
    let left = this.left(index)
    let right = this.right(index)
    let next = index

    if (left < this.heap.length && this.shouldSwap(left, index)) {
      next = left
    }

    if (right < this.heap.length && this.shouldSwap(right, next)) {
      next = right
    }

    if (next !== index) {
      this.swap(index, next)
      this.sink(next)
    }
  }

  swap (i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

module.exports = Heap
