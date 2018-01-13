const letters = [
  '0',
  '1',
  'ABC',
  'DEF',
  'GHI',
  'JKL',
  'MNO',
  'PQRS',
  'TUV',
  'WXYZ'
].map(c => c.split(''))

function mnemonics (phoneNumber) {
  let mnemonics = []
  let current = new Array(phoneNumber.length).fill(0)

  function findMnemonic (index) {
    if (index === phoneNumber.length) {
      // we've processed all the digits
      mnemonics.push(current.join(''))
    } else {
      // try every possible character
      let digit = parseInt(phoneNumber[index])
      for (let char of letters[digit]) {
        current[index] = char
        // recursively search to the end
        findMnemonic(index + 1)
      }
    }
  }

  // build mnemonics from the first index
  findMnemonic(0)
  return mnemonics
}

module.exports = mnemonics
