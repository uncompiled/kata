class ListNode {
  constructor (value) {
    this.value = value
    this.prev = null
    this.next = null
  }

  get () {
    return this.value
  }

  setPreviousTo (node) {
    return (this.prev = node)
  }

  setNextTo (node) {
    return (this.next = node)
  }
}

module.exports = ListNode
