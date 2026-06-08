function findCircleNum(isConnected: number[][]): number {
  const visited = new Set<number>();
  let total = 0;

  for (let i = 0; i < isConnected.length; i += 1) {
    if (visited.has(i)) {
      continue;
    }

    total += 1;
    visitNodes(i, isConnected, visited);
  }

  return total;
}

const visitNodes = (
  currentNode: number,
  isConnected: number[][],
  visited: Set<number>,
) => {
  if (visited.has(currentNode)) {
    return;
  }

  visited.add(currentNode);

  for (let i = 0; i < isConnected.length; i += 1) {
    //  1: Skip unconnected nodes
    if (isConnected[currentNode][i] === 0 || i === currentNode) {
      continue;
    }

    //  2: visit all connected nodes
    visitNodes(i, isConnected, visited);
  }
};
