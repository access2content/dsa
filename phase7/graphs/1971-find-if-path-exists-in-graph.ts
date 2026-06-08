function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  //  1: Build the adjacency List
  const graph = {};
  for (let i = 0; i < n; i += 1) {
    graph[i] = [];
  }
  for (const edge of edges) {
    const [u, v] = edge;

    graph[u].push(v);
    graph[v].push(u);
  }

  return hasPath(source, destination, graph, new Set<number>());
}

const hasPath = (
  source: number,
  destination: number,
  graph: object,
  visited: Set<number>,
): boolean => {
  if (source === destination) {
    return true;
  }
  if (visited.has(source)) {
    return false;
  }

  visited.add(source);

  for (const path of graph[source]) {
    const found = hasPath(path, destination, graph, visited);
    if (found) {
      return true;
    }
  }

  return false;
};
