function kthToLastNode (head, k) {
  let listLength = 0
  let current = head

  while (current) {
    current = current.next
    listLength++
  }

  if (k > listLength) return undefined

  let targetIndex = listLength - k

  current = head
  for (let i = 0; i < targetIndex; i++) {
    current = current.next
  }

  return current
}

module.exports = kthToLastNode
