function groupBy (iterable) {
  let grouper = ''
  let i = 0

  while (i < iterable.length) {
    let count = 1

    while (i + 1 < iterable.length && iterable[i] === iterable[i + 1]) {
      i++
      count++
    }

    grouper += count.toString() + iterable[i]
    i++
  }
  return grouper
}

function lookAndSay (n) {
  if (n < 1) {
    return undefined
  }

  if (n === 1) {
    return '1'
  }

  let chars = lookAndSay(n - 1).split('')
  return groupBy(chars)
}

module.exports = lookAndSay
