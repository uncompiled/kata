function wave (array) {
  let sorted = array.sort((x, y) => x - y)
  for (let i = 0; i < sorted.length - 1; i += 2) {
    swap(sorted, i, i + 1)
  }

  return sorted
}

function swap (array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

module.exports = wave
