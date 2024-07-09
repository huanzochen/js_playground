/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head)
  let p = dummy
  let l = 1

  while (l < left && p.next !== null) {
    p = p.next
    l++
  }

  let beforeRecursive = p
  let current = p.next
  let prev = null
  // To member the reverse end
  let reverseEnd = null
  // console.log('before while current:', current)

  while (l <= right) {
    next = current.next
    // console.log('next.val:', next.val)
    current.next = prev
    if (l === left) {
      reverseEnd = current
    }
    prev = current
    current = next

    l++
  }

  // console.log('==========')
  // console.log('after', 'current:', current, 'prev:', prev)
  // console.log('prev.val:', prev.val)
  // console.log('current:', current.val)
  // console.log('l:', l)
  // console.log('head:', head)

  beforeRecursive.next = prev
  reverseEnd.next = current

  return dummy.next
};