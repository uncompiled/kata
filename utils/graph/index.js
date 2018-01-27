const UNDIRECTED = 'UNDIRECTED'
const DIRECTED = 'DIRECTED'

const LinkedList = require('../linkedList')

class Graph {
  constructor (type = DIRECTED) {
    this.adjacencyList = new Map()
    this.type = type
  }

  add (vertex) {
    this.adjacencyList.set(vertex, [])

    return this
  }

  connect (source, destination) {
    // Defaults to directed graph
    this.adjacencyList.get(source).push(destination)

    if (this.type === UNDIRECTED) {
      this.adjacencyList.get(destination).push(source)
    }

    return this
  }

  numVertices () {
    return this.adjacencyList.size
  }

  getVertices () {
    return this.adjacencyList.keys()
  }

  getConnections (vertex) {
    return this.adjacencyList.get(vertex)
  }

  /**
   * Breadth-first search
   */
  bfs (source) {
    let queue = new LinkedList()
    let visited = new Map()
    let visitOrder = []

    // Initialize visited map to false
    for (let vertex of this.adjacencyList.keys()) {
      visited[vertex] = false
    }

    // Enqueue the source vertex
    queue.enqueue(source)
    visited[source] = true

    // Visit all unvisited nodes using queue
    while (!queue.isEmpty()) {
      let vertex = queue.dequeue()
      let neighbors = this.adjacencyList.get(vertex)

      visitOrder.push(vertex)

      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      }
    }

    return visitOrder
  }

  /**
   * Depth-first search
   */
  dfs (source) {
    let visited = new Map()
    let visitOrder = []

    // Initialize visited map to false
    let adjacencyList = this.adjacencyList
    for (let vertex of adjacencyList.keys()) {
      visited[vertex] = false
    }

    function _dfs (source) {
      // Visit the current node
      visited[source] = true
      visitOrder.push(source)

      let neighbors = adjacencyList.get(source)
      for (let neighbor of neighbors) {
        // Visit neighbors using call stack
        if (!visited[neighbor]) _dfs(neighbor)
      }
      return visitOrder
    }

    return _dfs(source)
  }
}

module.exports = {
  Graph,
  UNDIRECTED,
  DIRECTED
}
