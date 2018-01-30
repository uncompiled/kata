function singleNumber (numbers) {
  let result = 0
  for (let number of numbers) {
    result = result ^ number
  }

  return result
}

module.exports = singleNumber
