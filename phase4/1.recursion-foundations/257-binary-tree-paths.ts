/** Definition for a binary tree node. */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const output: string[] = [];

  const dfs = (root: TreeNode | null, path: number[]) => {
    if (root === null) {
      return;
    }

    if (root.left === null && root.right === null) {
      path.push(root.val);
      output.push(path.join("->"));
      return;
    }

    dfs(root.left, [...path, root.val]);
    dfs(root.right, [...path, root.val]);
  };

  dfs(root, []);

  return output;
}
