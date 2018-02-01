function countBits (decimalNumber) {
  let count = 0
  while (decimalNumber) {
    count += 1 & decimalNumber
    decimalNumber >>= 1
  }
  return count
}

module.exports = countBits
