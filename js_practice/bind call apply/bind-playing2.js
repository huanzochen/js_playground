let person = {
    'name': 'tommy',
    'age': 23,
    getName: function() {
        return `go inside getName function! age is = ${this.age}`
    }
}

function callMeMaybe(city) {
    return `Hi! name = ${this.name}, age = ${this.age} city = ${arguments[0]} otherargument= ${arguments[1]}`
}

let callBinded = callMeMaybe.bind(person, 'Hsinbei')
console.log(callBinded('aaa'))

// 用 call 會出錯, 因為 call 不會回傳一個 function
// let callBinded = callMeMaybe.call(person, 'Hsinbei')
// console.log(callBinded('aaa'))
// 也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。
// ref: https://www.cnblogs.com/coco1s/p/4833199.html

const getCallBind = person.getName.bind(person)
console.log(getCallBind())