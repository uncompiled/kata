function flipSwitches (lightbulbs) {
  let flipped = false
  let numPresses = 0

  for (let i = 0; i < lightbulbs.length; i++) {
    if (lightbulbs[i] === flipped) {
      flipped = !flipped
      numPresses++
    }
  }

  return numPresses
}

module.exports = flipSwitches
