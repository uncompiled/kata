const memoize = fn => {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    if (key in cache) {
      return cache[key]
    } else {
      let result = fn.apply(this, arguments)
      cache[key] = result
      return result
    }
  }
}
module.exports = memoize
