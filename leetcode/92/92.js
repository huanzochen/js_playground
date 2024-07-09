// from reverse 206

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
var reverseBetween = function (head, m, n) {
  let nodeConcatAtEnd = null

  const reverseN = (head, n) => {
    // base case
    if (n == 1) {
      // if the head is [1,2,3,4,5], then n === 1 should be 3
      // console.log('head.val:', head.val)

      nodeConcatAtEnd = head.next
      return head
    }
    const last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = nodeConcatAtEnd

    return last
  }

  if (m == 1) {
    return reverseN(head, n)
  }

  // 將 head.next 作為起點反轉前 m-1 個節點
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}

const q1 = new ListNode(1)
q1.next = new ListNode(2)
q1.next.next = new ListNode(3)
q1.next.next.next = new ListNode(4)
q1.next.next.next.next = new ListNode(5)

const test = q1
const result = reverseList(test)
console.log(result.toArray())


// const q2 = new ListNode(1)
// q2.next = new ListNode(2)
// q2.next.next = new ListNode(3)
// q2.next.next.next = new ListNode(4)
// q2.next.next.next.next = new ListNode(5)

// const testCase = (func, result) => {
//   console.log(JSON.stringify(func.toArray()) === JSON.stringify(result))
// }
// testCase(reverseList(q2), [3, 2, 1, 4, 5])