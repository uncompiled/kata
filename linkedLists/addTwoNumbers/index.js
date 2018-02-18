const LinkedList = require('../../utils/linkedList')

/**
 * adds two numbers that are represented as lists
 * @param {ListNode} list1 head node for first number
 * @param {ListNode} list2 head node for second number
 * @param {Number} base number system for digits
 */
function add (list1, list2, base = 10) {
  let sum = new LinkedList()
  let carry = 0

  while (list1 || list2 || carry) {
    // Add digits
    let digit1 = list1 ? list1.get() : 0
    let digit2 = list2 ? list2.get() : 0
    let value = carry + digit1 + digit2
    // Iterate over digits
    list1 = list1 ? list1.next : null
    list2 = list2 ? list2.next : null

    carry = Math.floor(value / base)
    sum.push(value % base)
  }

  // Returns a LinkedList representing the sum
  return sum
}

module.exports = add
