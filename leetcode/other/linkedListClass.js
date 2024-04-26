class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null // first node in the list;
    }

    // Add a new node to the end of the list
    add(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    // Insert a new node at beginning of the list
    // 直接從頭插入, 把最前面的 head 往後退一個, 嘿嘿
    insertAtBeginning(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    // Remove a node with a specific value
    remove(data) {
        let current = this.head
        let previous = null

        while (current !== null && current.data !== data) {
            // 不是這個有效的 node, 往下一個尋找
            previous = current
            current = current.next
        }

        // after the while loop, current is either the node we want to remove, or null

        if (current === null) {
            return // data not found int the list, and is reaching the end.
        }

        // 如果是第一個 node, 就直接把 head 指向下一個 node
        if (previous === null) {
            this.head = current.next
        }
        // 如果是中間的 node, 就把他剪掉，然後前後對接
        else {
            previous.next = current.next
        }
    }

    printList() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const list = new LinkedList()

// js 可以自動轉型，但這樣存不太好，哈哈
list.add(1)
list.add(20)
list.add(200)
list.add('tommy')
list.insertAtBeginning(100)
list.remove(100)
list.printList()