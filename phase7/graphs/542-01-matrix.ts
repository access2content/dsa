function updateMatrix(mat: number[][]): number[][] {
  const output: number[][] = Array.from({ length: mat.length }, () =>
    Array(mat[0].length).fill(undefined),
  );

  //  1: Find all 0s
  const startingPoints: [number, number][] = [];
  for (let row = 0; row < mat.length; row += 1) {
    for (let col = 0; col < mat[0].length; col += 1) {
      if (mat[row][col] === 0) {
        output[row][col] = 0;
        startingPoints.push([row, col]);
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (startingPoints.length) {
    const itemCount = startingPoints.length;

    for (let i = 0; i < itemCount; i += 1) {
      const [row, col] = startingPoints.shift()!;
      const currentLowest = output[row][col];

      //  For each direction, set the value if not done already
      for (const [r, c] of directions) {
        const newRow = row + r;
        const newCol = col + c;

        if (newRow < 0 || newRow >= mat.length) {
          continue;
        }
        if (newCol < 0 || newCol >= mat[0].length) {
          continue;
        }

        if (output[newRow][newCol] === undefined) {
          output[newRow][newCol] = currentLowest + 1;
          startingPoints.push([newRow, newCol]);
        }
      }
    }
  }

  return output;
}
