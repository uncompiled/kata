function shuffle (array) {
  if (array.length <= 1) return array

  for (let index = 0; index < array.length; index++) {
    let randomIndex = getRandom(index, array.length - 1)
    if (randomIndex !== index) {
      swap(array, index, randomIndex)
    }
  }

  return array
}

function swap (array, i, j) {
  let backup = array[i]
  array[i] = array[j]
  array[j] = backup
}

function getRandom (floor, ceiling) {
  let range = ceiling - floor + 1
  return floor + Math.floor(Math.random() * range)
}

module.exports = shuffle
