function parseRoman (numerals) {
  let conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0
  for (let i = 0; i < numerals.length; i++) {
    let curr = conversion[numerals[i]]
    let next = conversion[numerals[i + 1]]

    if (next > curr) {
      curr = next - curr
      i++
    }

    total += curr
  }
  return total
}

module.exports = parseRoman
