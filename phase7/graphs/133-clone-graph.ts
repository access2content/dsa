/** Definition for _Node. */
class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (node === null) {
    return null;
  }

  return clone(node, new Map<_Node, _Node>());
}

const clone = (node: _Node, cloned: Map<_Node, _Node>): _Node => {
  //  1: If already cloned, use it
  if (cloned.has(node)) {
    return cloned.get(node)!;
  }

  //  2: Create a new Node
  const newNode = new _Node(node.val);
  cloned.set(node, newNode);

  //  3: Clone the neighbors
  if (node.neighbors) {
    for (const neighbor of node.neighbors) {
      newNode.neighbors.push(clone(neighbor, cloned));
    }
  }

  return newNode;
};
