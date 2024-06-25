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
  traverse(node.right)
  res.push(node.val)
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
  
  const left = breakDown(node.left)
  const right = breakDown(node.right)

  // This value is not matter of it position because it at the end.
  // But if I use it at the middle of the code, not in return value, the position will become important.
  let current = node.val

  return [...left, ...right, current]
}

console.log(breakDown(tree))

const breakDownVariant = (node) => {
  // base case 
  if (node === null) return []

  const left = breakDownVariant(node.left)
  console.log(node.val, 'left:', left)
  const right = breakDownVariant(node.right)
  console.log(node.val, 'right:', right)
  const current = node.val
  console.log(node.val, 'current:', current)

  return [...left, ...right, current]
}

breakDownVariant(tree)