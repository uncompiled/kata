function sortByColor (array) {
  let colorCount = { red: 0, white: 0, blue: 0 }

  for (let i = 0; i < array.length; i++) {
    let color = array[i]
    colorCount[color]++
  }

  for (let i = 0; i < array.length; i++) {
    if (i < colorCount['red']) {
      array[i] = 'red'
    } else if (i < colorCount['red'] + colorCount['white']) {
      array[i] = 'white'
    } else {
      array[i] = 'blue'
    }
  }

  return array
}

module.exports = sortByColor
