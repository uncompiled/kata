function gcd (a, b) {
  if (!a) return b
  if (!b) return a

  let x = Math.min(a, b)
  let y = Math.max(a, b)

  let remainder = y % x
  return remainder === 0 ? x : gcd(y, remainder)
}

module.exports = gcd
