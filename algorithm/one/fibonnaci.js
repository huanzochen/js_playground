/**
 * 
 * To measure time taken by a function
 * https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
 * 
 */

let n = 43

// Recursion Fibonnaci

function fib_recursion (n) {
    if (n <= 1) {
        return n
    }
    return fib_recursion(n - 1) + fib_recursion(n - 2)
}

console.time('fib_recursion')
console.log(fib_recursion(n))
console.timeEnd('fib_recursion')

// iterative Fibonnaci

function fib_iterative (n) {
    let fib = {}
    fib[0] = 0
    fib[1] = 1
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n]
}

console.time('fib_iterative')
console.log(fib_iterative(n))
console.timeEnd('fib_iterative')

