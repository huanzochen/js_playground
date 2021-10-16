// run it in browser (such as chrome or somet))
// 不能使用 new() 要 object.create(), 因為他是 obj

let x = {
    a: 10,
    m: 5
}
let y = Object.create(x)
y.a = 40
let z = Object.create(y)
console.log(z)


