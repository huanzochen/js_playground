// linked_list produced with leetcode 21 with function
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

let l1 = new ListNode(1)
let l1_2 = new ListNode(2)
let l1_3 = new ListNode(4)

l1.next = l1_2
l1_2.next = l1_3

// console.log(l1)

let l2 = new ListNode(1)
let l2_2 = new ListNode(3)
let l2_3 = new ListNode(4)

l2.next = l2_2
l2_2.next = l2_3

// console.log(l2)

var mergeTwoList = function(l1, l2) {
    console.log(l1)
    let newList = new ListNode(0)
    let headList = newList\
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            newList.next = l1
            l1 = l1.next
        }
        else {
            newList.next = l2
            l2 = l2.next
        }
        newList = newList.next
    }

    while (l1 != null) {
        newList.next = l1
        l1 = l1.next

        newList = newList.next
    }
    while (l2 != null) {
        newList.next = l2
        l2 = l2.next

        newList = newList.next
    }

    return headList.next
}

mergeTwoList(l1, l2)

// console.log(mergeTwoList(l1, l2))