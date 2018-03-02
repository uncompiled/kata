function rearrange (array) {
  return array.map((_, i) => array[array[i]])
}

module.exports = rearrange
