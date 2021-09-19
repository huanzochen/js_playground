

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

// 這個 bind 實作注重在合併數值, 但沒有 this 的傳承, 之後再研究 t 是否有用
var addWithBind = bind(null, add, 2, 5)
console.log(addWithBind(8, 4, 3, 2))	