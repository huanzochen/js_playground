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

      if (left <= this.size && this.compare(this.heap[index], this.heap[left])) {
        min = left
      }
      if (right <= this.size && this.compare(this.heap[index], this.heap[right])) {
        min = right
      }

      if (min !== index) {
        this.swap(index, min)
      } else {
        break
      }
    }
  }

  all() {
    return this.heap
  }
}

/**
* @param {number[][]} matrix
* @param {number} k
* @return {number}
*/
var kthSmallest = function (matrix, k) {
  const minH = new SimpleMinPQ(matrix.length + 1, (a, b) => { return a[0] - b[0] > 0 })

  for (let i = 0; i < matrix.length; i++) {
    minH.push([matrix[i][0], i, 0])
  }

  let res = -1

  // minH.push([2])
  // minH.push([11])
  // minH.push([12])
  // minH.pop()
  // minH.pop()
  // minH.pop()

  // console.log(minH.isEmpty())

  while (!minH.isEmpty() && k > 0) {
    let cur = minH.pop()
    res = cur[0]
    k--

    // 鏈表中的下一個節點加入優先級隊列
    let i = cur[1], j = cur[2]
    if (j + 1 < matrix[i].length) {
      minH.push([matrix[i][j + 1], i, j + 1])
    }
  }
  return res
}