class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0
        let node = this.head 
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    clear() {
        this.head = null
    }

    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        let firstNode = this.head
        return firstNode
    }

    getAll() {
        let result = []
        let node = this.head
        if (node) {
            while (node != null) {
                result.push(node.val)
                node = node.next
            }
        }
        return result
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(7)

node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

console.log(list.head.next.val) // returns 5


console.log(list)
console.log(list.size())
// console.log(list.clear())
console.log(list.getLast())
console.log(list.getFirst())
console.log(list.getAll())
