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

const q1 = new ListNode(1)
q1.next = new ListNode(2)
q1.next.next = new ListNode(3)
q1.next.next.next = new ListNode(4)
q1.next.next.next.next = new ListNode(5)

const test = q1
console.log(reverseList(test).toArray())

const q2 = new ListNode(1)
q2.next = new ListNode(2)
q2.next.next = new ListNode(3)
q2.next.next.next = new ListNode(4)
q2.next.next.next.next = new ListNode(5)

const testCase = (func, result) => {
  console.log(JSON.stringify(func.toArray()) === JSON.stringify(result))
}
testCase(reverseList(q2), [3, 2, 1, 4, 5])