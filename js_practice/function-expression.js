/**
 * @param {number} n
 * @return {number}
 */
function map(f, a) {
    var result = []
    var i
    for (let i = 0;i != a.length;i++) {
        result[i] = f(a[i])
    }
    return result
}

const f = function(x) { return x * x * x }
let numbers = [0, 1, 2, 3, 4]

console.log(map(f, numbers))

