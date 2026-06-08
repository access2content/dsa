function orangesRotting(grid: number[][]): number {
  const queue: [number, number][] = [];

  //  1: Put all rotten Oranges in Queue
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  let time = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  //  2: Rot the Oranges till all breadth
  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i += 1) {
      const [row, col] = queue.shift()!;

      for (const [r, c] of directions) {
        const newRow = row + r;
        const newCol = col + c;

        if (newCol < 0 || newCol >= grid[0].length) {
          continue;
        }
        if (newRow < 0 || newRow >= grid.length) {
          continue;
        }

        if (grid[newRow][newCol] === 1) {
          grid[newRow][newCol] = 2;
          queue.push([newRow, newCol]);
        }
      }
    }

    time += 1;
  }

  //  3: Check if remaining rotten oranges are there
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return Math.max(0, time - 1);
}
