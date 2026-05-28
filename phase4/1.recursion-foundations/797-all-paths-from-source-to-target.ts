function allPathsSourceTarget(graph: number[][]): number[][] {
  const paths: number[][] = [];
  const route = [0];

  const dfs = (n: number) => {
    if (n === graph.length - 1) {
      paths.push([...route]);
      return;
    }

    for (const path of graph[n]) {
      route.push(path);
      dfs(path);
      route.pop();
    }
  };

  dfs(0);

  return paths;
}
