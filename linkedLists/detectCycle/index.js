function detectCycle (head) {
  let slow = head
  let fast = head

  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      fast = head
      break
    }
  }

  while (slow && fast) {
    if (slow === fast) {
      return slow.data
    }

    slow = slow.next
    fast = fast.next
  }

  return null
}

module.exports = detectCycle
