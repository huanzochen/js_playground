class CycleArray {
  constructor(size) {
    this.arr = new Array(size).fill(null)
    this.start = 0
    this.end = 0
    this.count = 0 // 欲來追蹤術組中的元素數量
    this.size = size
  }

  isEmpty() {
    return this.count === 0
  }

  getStart() {
    if (this.isEmpty()) {    
      throw new Error('Array is empty')
    }
    return this.arr[this.start]
  }

  getEnd() {
    if (this.isEmpty()) {
      throw new Error('Array is empty')
    }
    return this.arr[(this.end - 1 + this.size) % this.size]
  }

  addStart(v) {
    this.count++
    // (why this.start - 1 + this.size)? 因為當在原點的時候，像是 0, 會變成負數，所以有個統一的 + this.size 的方式可以中和
    this.start = (this.start - 1 + this.size) % this.size
    this.arr[this.start] = v

    console.log('this.start:', this.start, 'this.arr:', this.arr)
  }

  removeStart() {
    if (this.isEmpty()) {
      throw new Error('Array is Empty')
    }
    this.arr[this.start] = null
    this.start = (this.start + 1) % this.size
    this.count--
  }

  addEnd(v) {
    this.count++
    this.arr[this.end] = v
    this.end = (this.end + 1) % this.size

    console.log('this.end:', this.end, 'this.arr:', this.arr)
  }

  removeEnd() {
    if (this.isEmpty()) {
      throw new Error('Array is Empty')
    }
    this.end = (this.end - 1 + this.size) % this.size
    this.arr[this.end] = null
    this.count--
  }

  all() {
    return this.arr
  }
}

const cyc = new CycleArray(3)
cyc.addStart(3)
cyc.addStart(4)
cyc.addEnd(1)

// If there is a cycle in the array, the start and end will be the same
cyc.addEnd(2)
cyc.removeEnd(2)

console.log(cyc.all())