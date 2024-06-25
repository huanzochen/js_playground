class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// The first way is to traverse the tree at all.
const traverse = (node) => {
  // base case 
  if (node === null) return

  traverse(node.left)
  res.push(node.val)
  traverse(node.right)
}

const tree = new TreeNode(0)
tree.left = new TreeNode(1)
tree.right = new TreeNode(2)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(4)
tree.right.left = new TreeNode(5)

let res = []
traverse(tree)
console.log('res:', res)

// The second way is to break down the problem into single nodes.
const breakDown = (node) => {
  // base case
  if (node === null) return []

  let current = node.val
  const left = breakDown(node.left)
  const right = breakDown(node.right)

  return [...left, current, ...right]
}

console.log(breakDown(tree))