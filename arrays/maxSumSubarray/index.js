function kadanesAlgorithm (array) {
  let localMaximum, maximumSum
  localMaximum = maximumSum = array[0]

  for (let i = 1; i < array.length; i++) {
    localMaximum = Math.max(array[i], localMaximum + array[i])
    maximumSum = Math.max(maximumSum, localMaximum)
  }

  return maximumSum
}

module.exports = kadanesAlgorithm
