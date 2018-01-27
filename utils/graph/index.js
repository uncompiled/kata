const UNDIRECTED = 'UNDIRECTED'
const DIRECTED = 'DIRECTED'

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
}

module.exports = {
  Graph,
  UNDIRECTED,
  DIRECTED
}
