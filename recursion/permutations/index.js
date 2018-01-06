/**
 * Generates all the permutations of a collection
 * @param {Object[]} array
 * @returns An array of permutations
 */
function permutations(array) {
  // Base case
  if (array.length < 2) return [array];

  // Otherwise, generate permutations...
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (array.indexOf(item) != i) continue;

    let before = array.slice(0, i);
    let after = array.slice(i + 1, array.length);
    let rest = before.concat(after);

    for (let subsequence of permutations(rest)) {
      results.push([item].concat(subsequence));
    }
  }

  return results;
}

module.exports = permutations;
