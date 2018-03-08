function excelToNumber (column) {
  column = column.toUpperCase()

  let number = 0
  for (let digit = column.length - 1; digit >= 0; digit--) {
    let place = column.length - digit - 1
    number += valueOf(column[digit]) * Math.pow(26, place)
  }
  return number
}

function valueOf (character) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) + 1
}

module.exports = excelToNumber
