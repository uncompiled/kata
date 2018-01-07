/**
 * Generate 2^n binary encodings of n = array.length
 * @param {Object[]} array
 * @returns an array of binary numbers
 */
function binaryEncodings (array) {
  let n = array.length
  let results = []

  /* This method is predicated on the fact that we can generate 2^n-1
   * binary numbers. Each digit in the binary number is an encoding of
   * whether that element of the set should be included in the subset.
   */

  for (let bitmask = 0; bitmask < Math.pow(2, n); bitmask++) {
    let subset = []
    for (let i = 0; i < n; i++) {
      if (bitmask & (1 << i)) {
        // if `ith` bit is set in the binary number, include item in subset
        subset.push(array[i])
      }
    }
    results.push(subset)
  }
  return results
}

/**
 * powerset generates all subsets of a superset
 * @param {*} array a superset to calculate subsets
 * @returns sorted array containing all subsets of the superset
 */
function powerset (array) {
  let initialValue = [[]]
  return array.reduceRight(
    (acc, item) => acc.concat(acc.map(rest => [item].concat(rest))),
    initialValue
  )
}

module.exports = {
  powerset,
  iterative: binaryEncodings
}
