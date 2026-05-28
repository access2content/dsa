function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const from = image[sr][sc];
  const maxRow = image.length;
  const maxCol = image[0].length;

  const memo = new Set();

  const dfs = (row: number, col: number) => {
    if (row < 0 || row >= maxRow) {
      return;
    }
    if (col < 0 || col >= maxCol) {
      return;
    }

    const key = `${row}X${col}`;
    if (memo.has(key)) {
      return;
    }

    if (image[row][col] !== from) {
      return;
    }

    image[row][col] = color;
    memo.add(key);

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(sr, sc);

  return image;
}
