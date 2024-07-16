class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node = new TreeNode(1)
node.left = new TreeNode(2)
node.right = new TreeNode(3)
node.left.left = new TreeNode(4)
node.left.right = new TreeNode(5)
node.left.right.left = new TreeNode(6)
node.left.right.right = new TreeNode(7)
node.right.left = new TreeNode(8)
node.right.right = new TreeNode(9)
const root = node

function preOrder(root) {
  // base case
  if (root === null) return []

  const current = root.val
  const left = preOrder(root.left)
  const right = preOrder(root.right)

  return [current, ...left, ...right]
}

// The preOrder array should be [ 1, 2, 4, 5, 6, 7, 3, 8, 9]
console.log('preOrder(root):', preOrder(root))

// The inOrder array should be []
function inOrder(root) {
  // base case
  if (root === null) return []

  const left = inOrder(root.left)
  const current = root.val
  const right = inOrder(root.right)
  return [...left, current, ...right]
}
// The inOrderArray should be [ 4, 2, 6, 5, 7, 1, 8, 3, 9]
console.log('inOrder(root):', inOrder(root))


function postOrder(root) {
  // base case
  if (root === null) return []

  const left = postOrder(root.left)
  const right = postOrder(root.right)
  const current = root.val

  return [...left, ...right, current]
}
postOrder(root)

console.log('postOrder:', postOrder(root))