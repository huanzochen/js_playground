class SimpleMinPQ {
  constructor(capacity, compare) {
    this.heap = new Array(capacity + 1).fill([0])
    this.size = 0
    this.heap[0] = [0]
    this.compare = compare
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  parent(index) {
    return Math.floor(index / 2)
  }

  left(index) {
    return 2 * index
  }

  right(index) {
    return 2 * index + 1
  }

  push(value) {
    this.size++
    // console.log('push start, value:', value, 'this.size:', this.size)
    this.heap[this.size] = value
    this.swim(this.size)
  }

  swim(index) {
    // console.log('swim start, index:', index, "this.parent(index)", this.parent(index))
    // console.log('this.heap[this.parent(index)], this.heap[index]:', this.heap[this.parent(index)], this.heap[index])

    while (index > 1 && this.compare(this.heap[this.parent(index)], this.heap[index])) {
      this.swap(this.parent(index), index)
      index = this.parent(index)
    }

    // console.log('swim end, this.heap:', this.heap, "index:", index)
  }

  swap(a, b) {
    // console.log('swap begins, a, b:', a, b)
    const temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp
  }

  pop() {
    const res = this.heap[1]
    this.heap[1] = this.heap[this.size]
    this.heap[this.size] = [0]
    this.size--
    this.sink(1)
    return res
  }

  sink(index) {
    // console.log('index:', index, 'this.heap[index]:', this.heap[index])
    while (true) {
      let left = this.left(index)
      let right = this.right(index)
      let min = index

      if (left <= this.size && this.compare(this.heap[min], this.heap[left])) {
        min = left
      }
      if (right <= this.size && this.compare(this.heap[min], this.heap[right])) {
        min = right
      }

      if (min !== index) {
        this.swap(index, min)
        index = min
      } else {
        break
      }
    }
  }

  all() {
    return this.heap
  }
}