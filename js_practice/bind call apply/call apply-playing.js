function fruits () {}
fruits.prototype = {
    color: 'red',
    say: function() {
        console.log(`My color is ${this.color}`)
    }
}
let apple = new fruits
apple.say() // My color is red
let banana = {
    color:'yellow'
}
// call, apply 就是動態的改變 this
apple.say.call(banana) // My color is yellow
apple.say.apply(banana) // My color is yellow

/////////////////////////////////////////////////////////////////////////

function Animal (gender, type) {
    this.gender = gender
    this.type = type
}
Animal.prototype.say = function() {
    console.log(`I am a ${this.gender} ${this.type}. roar!`)
}

let lion = new Animal('male', 'lion')
lion.say() // I am a male lion. roar!
let cat = new Animal('female', 'cat')
// 替換他的 this 變成一隻 cat 的 gender & type
lion.say.apply(cat) // I am a female cat. roar!

/////////////////////////////////////////////////////////////////////////

var array1 = new Array (12, 'foo', { name:  'Joe' }, -2458)
var array2 = new Array ('Doe', 555, 100)
// Merge the second Array to the first array
// 如果第二個陣列（範例中的 moreVegs）非常大，就不要使用這個方法。
// 因為一個函式能取得的參數之最大數量是受到實作限制的。詳細請參閱 apply()。
// ref:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Array.prototype.push.apply(array1, array2)
console.log(array1)
console.log(array2)

/////////////////////////////////////////////////////////////////////////

// 定義一個 log 可以取代 console.log()
function log(msg) {
    console.log(msg)
}
log(1) // 1
log(1, 2) // 1
function applyLog(msg) {
    console.log.apply(console, arguments)
}
applyLog(1) // 1
// 以下作法等同於 console.log(1, 2)
applyLog(1, 2) // 1 2 

// 當然, 現在完全可以用 spread operator 替代
function betterLog(...msg) {
    console.log(...msg)
}
betterLog(1) // 1
betterLog(1, 2) // 1 2

// 如果要在log 上 加入一個前綴 (app) 該怎麼做?
function appLog(msg) {
    // 想獲取 arguments, 但是要先把 arguments 轉成真物件

    // 以下有三種方法可以做到一樣的事
    // let logArg = Array.prototype.slice.call(arguments)
    // let logArg = [].slice.call(arguments)
    let mySlice = Function.prototype.call.bind(Array.prototype.slice)
    let logArg = mySlice(arguments)
    
    logArg.unshift('(app)')
    console.log.apply(console, logArg)
}
appLog(1, 2) // (app) 1 2


/////////////////////////////////////////////////////////////////////////

let num = [1, 2, 33, 51, 21, 21, 566, 32, 3932]
// 找出該陣列的最大值
console.log(Math.max(...num))

// 如果想要將一整個陣列的值傳進去 除了新的 spread operator, 還可以這樣做:
console.log(Math.max.apply(Math, num))
console.log(Math.max.call(Math, ...num))
