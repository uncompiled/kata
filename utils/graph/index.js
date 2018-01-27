const UNDIRECTED = 'UNDIRECTED'
const DIRECTED = 'DIRECTED'

const Queue = require('../linkedList')

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
    let q = new Queue()
    let visited = new Map()
    let visitOrder = []

    // Initialize visited map to false
    for (let vertex of this.adjacencyList.keys()) {
      visited[vertex] = false
    }

    // Enqueue the source vertex
    q.enqueue(source)
    visited[source] = true

    // Visit all unvisited nodes using queue
    while (!q.isEmpty()) {
      let vertex = q.dequeue()
      let neighbors = this.adjacencyList.get(vertex)

      visitOrder.push(vertex)

      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          q.enqueue(neighbor)
        }
      }
    }

    return visitOrder
  }
}

module.exports = {
  Graph,
  UNDIRECTED,
  DIRECTED
}
