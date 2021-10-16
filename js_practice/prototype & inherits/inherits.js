// ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

let o = {
    a:2,
    m: function() { 
        return this.a + 1
    }
}

console.log(o.m())

let p = Object.create(o)

p.a = 4
console.log(p.m()) // supposed to be 4 + 1 = 5

// 因為 this 在呼叫 p.m() 的時候, 是從 p 繼承的.


// 以下請參考該文章, 在 browser 執行.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
function doSomething() {}
console.log(doSomething.prototype)
doSomething.prototype.tommy = 'hi'


const doSomethingFromArrowFunction = () => {}
console.log(doSomethingFromArrowFunction.prototype) // 會是 undefined

var doSomeInstancing = new doSomething()
doSomeInstancing.prop = 'some value'

var doSomeInstancing2 = new doSomething()
doSomeInstancing2.prop = 'some value2'

console.log(Object.getPrototypeOf(doSomeInstancing2).tommy)
console.log(doSomeInstancing2.__proto__.tommy)