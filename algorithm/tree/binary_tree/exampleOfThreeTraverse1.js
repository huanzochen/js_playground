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

let preOrderArray = []
function preOrder(root) {
  // base case
  if (root === null) return null

  preOrderArray.push(root.val)

  preOrder(root.left)
  preOrder(root.right)
}
preOrder(root)

// The preOrder array should be [ 1, 2, 4, 5, 6, 7, 3, 8, 9]
console.log('preOrderArray:', preOrderArray)

// The inOrder array should be []
let inOrderArray = []
function inOrder(root) {
  // base case
  if (root === null) return null

  inOrder(root.left)
  inOrderArray.push(root.val)
  inOrder(root.right)
}
inOrder(root)

// The inOrderArray should be [ 4, 2, 6, 5, 7, 1, 8, 3, 9]
console.log('inOrderArray:', inOrderArray)

let postOrderArray = []
function postOrder(root) {
  // base case
  if(root === null) return null
  postOrder(root.left)
  postOrder(root.right)

  postOrderArray.push(root.val)
}
postOrder(root)

console.log('postOrderArray:', postOrderArray)