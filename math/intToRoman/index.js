function intToRoman (number) {
  const conversion = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }

  function generateNumerals (number) {
    if (number in conversion) {
      return conversion[number]
    } else {
      let maxKey = Math.max(
        ...Object.keys(conversion).filter(key => key < number)
      )
      return conversion[maxKey] + generateNumerals(number - maxKey)
    }
  }

  return generateNumerals(number)
}

module.exports = intToRoman
