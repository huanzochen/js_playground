



var fib = function fabo(n) {
    let result = []
    let current = 0
    if (n === 0) {
        return 0
    }
    else if (n === 1) {
        return 1
    }
    else {
        return fabo(n - 1) + fabo(n - 2)
    }
}

// console.log(fib(10))


let result = []
let current = 0

var fibArray = function fabo(n, current) {
    if (current === 0) {
        current++ 
        return result = result.concat(0)
    }
    else if (current === 1) {
        current++ 
        return result = result.concat(1)
    }
    else if (current <= n) {
        return result.concat(fabo(n, current) + fabo(n, current))
    }
}

console.log(fibArray(10))

