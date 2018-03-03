function maxProductOf3 (integerArray) {
  if (integerArray.length < 3) return undefined

  let maxInt = Math.max(integerArray[0], integerArray[1])
  let minInt = Math.min(integerArray[0], integerArray[1])

  let maxPair = integerArray[0] * integerArray[1]
  let minPair = integerArray[0] * integerArray[1]
  let largest = integerArray[0] * integerArray[1] * integerArray[2]

  for (let i = 2; i < integerArray.length; i++) {
    let number = integerArray[i]

    largest = Math.max(largest, number * maxPair, number * minPair)
    maxPair = Math.max(maxPair, number * maxInt, number * minInt)
    minPair = Math.min(minPair, number * maxInt, number * minInt)

    maxInt = Math.max(maxInt, number)
    minInt = Math.min(minInt, number)
  }

  return largest
}

module.exports = maxProductOf3
