const { Graph, DIRECTED, UNDIRECTED } = require('../graph')

test('empty graph', () => {
  let graph = new Graph()
  expect(graph.numVertices()).toEqual(0)
})

test('single node graph', () => {
  let graph = new Graph()
  graph.add('A')

  expect(graph.numVertices()).toEqual(1)
  expect(graph.bfs('A')).toEqual(['A'])
})

test('two node directed graph', () => {
  let graph = new Graph(DIRECTED)
  graph.add('A')
  graph.add('B')

  graph.connect('A', 'B')

  expect(graph.numVertices()).toEqual(2)
  // Default mode is directed graph, so A -> B
  expect(graph.getConnections('A')).toEqual(['B'])
  expect(graph.getConnections('B')).toEqual([])

  expect(graph.bfs('A')).toEqual(['A', 'B'])
  expect(graph.bfs('B')).toEqual(['B'])
})

test('two node undirected graph', () => {
  let graph = new Graph(UNDIRECTED)
  graph.add('A')
  graph.add('B')

  graph.connect('A', 'B')

  expect(graph.numVertices()).toEqual(2)
  // In an undirected graph, the connection should be bi-directional
  expect(graph.getConnections('A')).toEqual(['B'])
  expect(graph.getConnections('B')).toEqual(['A'])

  expect(graph.bfs('A')).toEqual(['A', 'B'])
  expect(graph.bfs('B')).toEqual(['B', 'A'])
})
