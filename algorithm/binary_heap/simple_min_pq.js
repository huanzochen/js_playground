class SimpleMinPQ {
  constructor(capacity) {
    // Because index 0 is not used, we need to allocate one extra space.
    this.heap = new Array(capacity + 1)
    this.size = 0
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  parentIndex(node) {
    return Math.floor(node / 2)
  }

  // left child index
  left(node) {
    return node * 2
  }

  // right child index
  right(node) {
    return node * 2 + 1
  }
    
  // swap the two elements in the array
  swapValueWithIndex(one, two) {
    const temp = this.heap[one]
    this.heap[one] = this.heap[two]
    this.heap[two] = temp
  }

  // Peek, return the top element of the heap, time complexity O(1)
  peek() {
    // Because index 0 is not used, so return 1
    return this.heap[1]
  }

  push(element) {
    // Place the new element at the end, cause the size is the value of all the elements, so the new element its index is size + 1
    this.heap[++this.size] = element
    // Then let the new element swim to the correct position, the variable is the index of the new element 
    this.swim(this.size)
  }

  // Pop, remove the top element of the heap, time complexity O(logN)
  pop() {
    // The smallest element in the heap is at index 1
    const resource = this.heap[1]

    // use the size, and then minus 1, because the size is shrinking after pop one element.
    // switch the last element with the top element, and then start to sink it down the tree
    this.heap[1] = this.heap[this.size--]

    // Then sink it to the correct position
    this.sinkByIndex(1)
    return resource
  }

  // targetIndex = target node index
  swimByIndex(targetIndex) {

    // targetIndex > 1 is because the index 0 is not used, and the index 1 is the top element
    while (targetIndex > 1 && this.heap[this.parentIndex(targetIndex)] > this.heap[targetIndex]) {
      this.swapValueWithIndex(this.parentIndex(targetIndex), targetIndex)

      // update the targetIndex node index value, it becomes the parent node index value
      targetIndex = this.parentIndex(targetIndex)
    }
  }

  // Sink operation, time complexity is O(logN), because it is the hieght of the tree
  sinkByIndex(targetIndex) {
    // the node should make sense, it should be in the size of the heap.
    while (this.left(targetIndex) <= this.size || this.right(targetIndex) <= this.size) {
      let min = targetIndex
      if (this.left(targetIndex) <= this.size && this.heap[this.left(targetIndex)] < this.heap[min]) {
        min = this.left(targetIndex)
      }
      if (this.right(targetIndex) <= this.size && this.heap[this.right(targetIndex)] < this.heap[min]) {
        min = this.right(targetIndex)
      }

      if (min === targetIndex) break

      this.swapValueWithIndex(targetIndex, min)
      targetIndex = min
    }

  }
}

const pq = new SimpleMinPQ(5)

pq.push(3)
pq.push(1)
pq.push(4)
pq.push(1)
pq.push(5)
pq.push(9)

while (!pq.isEmpty()) {
  console.log(pq.pop())
}

console.log('pq.peek():', pq.peek())
