class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const traverse = (head) => {
  if (head === null) {
    return new ListNode(-1)
  }

  console.log('pre-order traversal, head.val:', head.val)
  traverse(head.next)
  // If I want to do post-order traversal for a singly linked-list, it's here.
  console.log('post-order traversal, head.val:', head.val)
}

const list = new ListNode(0)
list.next = new ListNode(1)
list.next.next = new ListNode(2)
list.next.next.next = new ListNode(3)
list.next.next.next.next = new ListNode(4)
list.next.next.next.next.next = new ListNode(5)

traverse(list)