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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const output: number[][] = [];
  const queue: (TreeNode | null)[] = [root, null];

  let levelValues: number[] = [];
  while (queue.length > 0) {
    const currentNode = queue.shift()!;

    if (currentNode === null) {
      output.push(levelValues);
      levelValues = [];

      if (queue.length > 0) {
        queue.push(null);
      }

      continue;
    }

    levelValues.push(currentNode.val);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return output;
}

function levelOrderReal(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const output: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const currentLength = queue.length;
    const levelValues: number[] = [];

    for (let i = 0; i < currentLength; i += 1) {
      const currentNode = queue.shift()!;
      levelValues.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    output.push(levelValues);
  }

  return output;
}
