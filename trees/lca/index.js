function lca (root, v, w) {
  let vPath = []
  let wPath = []

  if (!find(vPath, root, v) || !find(wPath, root, w)) {
    // Either v or w isn't in the tree, so return undefined
    return undefined
  }

  let result
  for (let i = 0; i < vPath.length && i < wPath.length; i++) {
    if (vPath[i] === wPath[i]) {
      result = vPath[i]
    } else {
      break
    }
  }
  return result
}

function find (path, root, searchValue) {
  // Base case: subtree is empty, so it's not there
  if (!root) return false
  // Save this node in the path
  path.push(root.value)
  // We found it.
  if (root.value === searchValue) return true

  if (
    // We haven't found it yet, so recur on children.
    (root.left && find(path, root.left, searchValue)) ||
    (root.right && find(path, root.right, searchValue))
  ) {
    return true
  }

  // We didn't find it, so cleanup and return false.
  path.pop()
  return false
}

module.exports = lca
