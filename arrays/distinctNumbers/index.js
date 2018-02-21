function distinctNumbers (array, k) {
  let results = []
  let window = new Map()
  let numDistinct = 0

  if (k > array.length) return results

  // Set up the first window
  for (let i = 0; i < k; i++) {
    let number = array[i]
    if (!window.has(number)) {
      window.set(number, 1)
      numDistinct++
    } else {
      window.set(number, window.get(number) + 1)
    }
  }

  // Save the number of distinct elements in first window
  results.push(numDistinct)

  // Slide the window along the remainder
  for (let i = k; i < array.length; i++) {
    // Deal with removing the first element
    let firstElement = array[i - k]
    if (window.get(firstElement) === 1) {
      window.delete(firstElement)
      numDistinct--
    } else {
      window.set(firstElement, window.get(firstElement) - 1)
    }
    // Deal with adding the new element
    let newElement = array[i]
    if (!window.has(newElement)) {
      window.set(newElement, 1)
      numDistinct++
    } else {
      window.set(newElement, window.get(newElement) + 1)
    }

    // Save the number of distinct elements in window to results
    results.push(numDistinct)
  }

  return results
}

module.exports = distinctNumbers
