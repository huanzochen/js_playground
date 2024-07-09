class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next == null ? null : next
  }
  // Method to convert linked list to array
  toArray() {
    let result = []
    let current = this
    while (current !== null) {
      result.push(current.val)
      current = current.next
    }
    return result
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

  let prev = null

  const reverseN = (head, n) => {
    // base case, when the recursive will return
    if (n === 1) {
      return head
    }

  }

  return reverseN(head, 3)
}

const test = new ListNode(1)
test.next = new ListNode(2)
test.next.next = new ListNode(3)
test.next.next.next = new ListNode(4)
test.next.next.next.next = new ListNode(5)

console.log(reverseList(test).toArray())