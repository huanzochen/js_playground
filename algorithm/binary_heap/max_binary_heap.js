class MaxPriorityQueue {
    constructor(capacity, compare) {
        this.heap = new Array(capacity + 1) // left index 0 ununsed
        this.size = 0
        this.compare = compare
    }

    size() {
        return this.size
    }

    peek() {
    // The first element of the Queue/Heap
        return this.heap[1]
    }

    isEmpty() {
        return this.size === 0
    }

    swapValue(x, y) {
        const temp = this.heap[x]
        this.heap[x] = this.heap[y]
        this.heap[y] = temp
    }

    push(value) {
        this.heap[++this.size] = value
        this.swim(this.size)
    }

    swim(x) {
        while (x > 1 && this.compare(this.heap[this.parent(x)], this.heap[x]) < 0) {
            this.swapValue(this.parent(x), x)
            x = this.parent(x)
        }
    }

    pop() {
        const target = this.heap[1]
        this.heap[1] = this.heap[this.size]
        this.heap[this.size] = 0
        this.size--
        this.sink(1)

        return target
    }

    sink(x) {
        while (this.left(x) <= this.size) {
            let compareNode = this.left(x)
            if (
                compareNode < this.size &&
        this.compare(this.heap[compareNode], this.heap[compareNode + 1]) < 0
            ) {
                compareNode++
            }
            if (this.compare(this.heap[x], this.heap[compareNode]) >= 0) break
            this.swapValue(x, compareNode)
            x = compareNode
        }
    }

    parent(x) {
        return Math.floor(x / 2)
    }

    left(x) {
        return x * 2
    }
    right(x) {
        return x * 2 + 1
    }

    // debug
    showHeap() {
        console.log('heap contains:', this.heap)
    }

    popAll() {
        while (this.size > 0) {
            console.log(this.pop())
        }
    }
}

const max = new MaxPriorityQueue(8, (a, b) => {
    return a - b
})

max.push(33)
max.push(55)
max.push(22)
max.push(11)
max.push(99)
max.push(1111)
max.push(100)
max.push(1122)
max.showHeap()
console.log('---- Start to pop ----')

max.pop()
max.showHeap()
max.pop()
max.showHeap()
max.pop()
max.showHeap()
