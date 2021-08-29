function listNode (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

let node1 = new listNode(1)
let node2 = new listNode(2)
let node3 = new listNode(7)
node1.next = node2
node2.next = node3

function linkedList (head) {
    this.head = head === undefined ? null : head
}

linkedList.prototype.size = function () {
    let count = 0
    let node = this.head
    while (node != null) {
        count ++
        node = node.next
    }
    return count
}

linkedList.prototype.getFirst = function() {
    return this.head
}

linkedList.prototype.clear = function() {
    this.head = null
}

linkedList.prototype.getLast = function() {
    let node = this.head
    while (node.next != null) {
        node = node.next
    }
    return node
}

linkedList.prototype.getAll = function() {
    let node = this.head
    let result = []

    while (node != null) {
        result.push(node.val)
        node = node.next
    }

    return result
}


// 模擬 class 中的 static function
linkedList.test = function() {
    return 'this is a static funtion in class'
}

let list = new linkedList(node1)
console.log(list)
// console.log(list.clear())
console.log(list.size())
console.log(list.getFirst())
console.log(list.getLast())
console.log(list.getAll())


console.log(linkedList.test())
// console.log(list.test())

