const notEmpty = array => array.length > 0
const last = array => array[array.length - 1]

function largestRectangleInHistogram (histograms) {
  let indices = []
  let maxArea = 0

  histograms.concat([0]).forEach((rightHeight, i) => {
    while (notEmpty(indices) && histograms[last(indices)] >= rightHeight) {
      let leftHeight = histograms[indices.pop()]
      let width = notEmpty(indices) ? i - last(indices) - 1 : i
      maxArea = Math.max(maxArea, leftHeight * width)
    }
    indices.push(i)
  })

  return maxArea
}

module.exports = largestRectangleInHistogram
