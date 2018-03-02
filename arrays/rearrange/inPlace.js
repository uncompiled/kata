function rearrange (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += (array[array[i]] % array.length) * array.length
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(array[i] / array.length)
  }
  return array
}

module.exports = rearrange
