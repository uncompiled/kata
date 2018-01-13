class ListNode {
  constructor (data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  setPreviousTo (node) {
    return (this.prev = node)
  }

  setNextTo (node) {
    return (this.next = node)
  }
}

/**
 * LinkedList is a doubly-linked list implementation
 * for fast access to the head or last element of the list
 */
class LinkedList {
  constructor () {
    this.reset()
  }

  reset () {
    this._head = null
    this._last = null
    this.length = 0
  }

  head () {
    return this._head.data
  }

  last () {
    return this._last.data
  }

  /**
   * push appends an object to the end of the list
   */
  push (value, options) {
    let { prepend = false } = options || {}

    let current = new ListNode(value)

    if (this.isEmpty()) {
      this._head = current
      this._last = current
    } else {
      if (prepend) {
        // insert at the head of the list
        let second = this._head
        current.setNextTo(second)
        second.setPreviousTo(current)
        this._head = current
      } else {
        // append to the end of the list
        let last = this._last
        current.setPreviousTo(last)
        last.setNextTo(current)
        this._last = current
      }
    }

    this.length++
    return current
  }

  /**
   * shift removes the first item from the list and returns the value
   */
  shift () {
    if (this._head) {
      let current = this._head

      if (this._head === this._last) {
        this._head = null
        this._last = null
      } else {
        let newHead = current.next
        this._head = newHead
      }

      this.length--
      return current.data
    }

    return undefined
  }

  /**
   * pop removes the last item in the list and returns the value
   */
  pop () {
    if (this._last) {
      let current = this._last

      if (this._head === this._last) {
        this._head = null
        this._last = null
      } else {
        let newLast = current.prev
        newLast.next = null
        this._last = newLast
      }

      this.length--

      return current.data
    }

    return undefined
  }

  /**
   * isEmpty returns a boolean value whether the list is empty
   */
  isEmpty () {
    return this.length === 0
  }

  /**
   * toArray returns a new Array containing the elements in the LinkedList
   */
  toArray (options) {
    // if reverse = true, links will be followed backwards
    let { reverse = false } = options || {}

    let results = []

    let current = reverse ? this._last : this._head
    while (current) {
      results.push(current.data)
      current = reverse ? current.prev : current.next
    }

    return results
  }

  /**
   * get returns the value at the specified index
   * @param {Number} index
   */
  get (index) {
    if (index < 0 || index > this.length - 1) return undefined

    let current = this._head
    for (let i = 0; current && i < index; i++) {
      current = current.next
    }

    return current.data
  }

  /**
   * find returns true or false if the value is in the list
   */
  find (value) {
    let current = this._head
    while (current) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  /**
   * promote takes a node and promotes it to the head of the list
   */
  promote (current) {
    let previous = current.prev
    let next = current.next

    if (current === this._head) return this

    if (current === this._last) {
      previous.next = null
      this._last = previous
    } else {
      // it's in the middle of two nodes,
      // so join previous <-> next
      // and make current the new head
      previous.next = next
      next.previous = previous
    }

    // set node to the head
    current.prev = null
    current.next = this._head
    this._head = current
    return this
  }
}

module.exports = LinkedList