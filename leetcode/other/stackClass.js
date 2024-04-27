class Stack {
    constructor() {
        this.items = [] // initialize an empty array to gold items
    }

    push(element) {
        this.items.push(element) // push an element to the end of the array, both it is the top of the stack.
    }

    // Delete the last element in the array, both it is the top of the stack, and return this deleted element.
    pop() {
        if (this.items.length === 0) {
            return 'stack is empty'
        }
        return this.items.pop()
    }

    // Have a peek at the top of the stack
    peek() {
        return this.items[this.items.length - 1]
    }

    // Check if the stack is empty?
    isEmpty() {
        return this.items.length === 0
    }

    // Check the size of the stack
    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(333)
stack.push(5)

console.log(stack.peek()) // 5
console.log(stack.pop()) // 5
console.log(stack.isEmpty()) // false