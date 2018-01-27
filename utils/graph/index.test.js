const { Graph, DIRECTED, UNDIRECTED } = require('../graph')

test('empty graph', () => {
  let graph = new Graph()
  expect(graph.numVertices()).toEqual(0)
})

test('single node graph', () => {
  let graph = new Graph()
  graph.add('A')

  expect(graph.numVertices()).toEqual(1)
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
})

/** Test Graph for BFS/DFS
 *                                ┌───┐
 *                        ┌───────│ A │───────┐
 *                        │       └───┘       │
 *                        ▼                   ▼
 *                      ┌───┐               ┌───┐
 *               ┌──────│ B │───────┐       │ G │
 *               │      └───┘       │       └───┘
 *               ▼                  ▼
 *             ┌───┐              ┌───┐
 *     ┌───────│ C │────┐         │ F │
 *     │       └───┘    │         └───┘
 *     ▼                ▼
 *   ┌───┐            ┌───┐
 *   │ D │            │ E │
 *   └───┘            └───┘
 */

test('breadth-first search', () => {
  let directedGraph = new Graph()
  directedGraph.add('A')
  expect(directedGraph.bfs('A')).toEqual(['A'])

  directedGraph.add('B').connect('A', 'B')
  expect(directedGraph.bfs('A')).toEqual(['A', 'B'])
  expect(directedGraph.bfs('B')).toEqual(['B'])

  let undirectedGraph = new Graph(UNDIRECTED)
  undirectedGraph.add('A')
  expect(undirectedGraph.bfs('A')).toEqual(['A'])

  undirectedGraph.add('B').connect('A', 'B')
  expect(undirectedGraph.bfs('A')).toEqual(['A', 'B'])
  expect(undirectedGraph.bfs('B')).toEqual(['B', 'A'])

  undirectedGraph.add('C').connect('B', 'C')
  undirectedGraph.add('D').connect('C', 'D')
  undirectedGraph.add('E').connect('C', 'E')
  undirectedGraph.add('F').connect('B', 'F')
  undirectedGraph.add('G').connect('A', 'G')

  let expected = ['A', 'B', 'G', 'C', 'F', 'D', 'E']
  expect(undirectedGraph.bfs('A')).toEqual(expected)
})

test('depth-first search', () => {
  let graph = new Graph(DIRECTED)

  graph.add('A')
  expect(graph.dfs('A')).toEqual(['A'])

  graph.add('B').connect('A', 'B')
  expect(graph.dfs('A')).toEqual(['A', 'B'])
  expect(graph.dfs('B')).toEqual(['B'])

  graph.add('C').connect('B', 'C')
  expect(graph.dfs('A')).toEqual(['A', 'B', 'C'])
  expect(graph.dfs('B')).toEqual(['B', 'C'])
  expect(graph.dfs('C')).toEqual(['C'])

  graph.add('D').connect('C', 'D')
  graph.add('E').connect('C', 'E')
  graph.add('F').connect('B', 'F')
  graph.add('G').connect('A', 'G')

  let expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  expect(graph.dfs('A')).toEqual(expected)
})
