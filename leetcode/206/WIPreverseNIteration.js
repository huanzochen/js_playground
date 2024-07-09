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

  const reverseN = (head, n) => {
    let curr = head
    let prev = null

    for (let i = 0; i < n; i++) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    // 反轉完後，要把剩下的頭接上
    head.next = curr

    // console.log('prev:', prev, 'prev.next:', prev.next)
    // console.log('curr:', curr, 'curr.next:', curr.next)
    return prev
  }

  return reverseN(head, 3)
}

const test = new ListNode(1)
test.next = new ListNode(2)
test.next.next = new ListNode(3)
test.next.next.next = new ListNode(4)
test.next.next.next.next = new ListNode(5)

console.log(reverseList(test).toArray())