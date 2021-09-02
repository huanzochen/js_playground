

// function add(a, b, c) {
//   return a + b + c
// }

function add() {
    return Array.from(arguments).reduce(function(accumulator, current) {
        return accumulator = accumulator + current
    })
}

function bind(t, callback) {
    var outerArgs = Array.from(arguments).slice(2)
    console.log(outerArgs)
    return function() {
        var innerArgs = Array.from(arguments)
        console.log(outerArgs.concat(innerArgs))
        return callback.apply(t, outerArgs.concat(innerArgs))
    }
}

var addWithBind = bind(null, add, 2, 5)
console.log(addWithBind(8, 4, 3, 2))	