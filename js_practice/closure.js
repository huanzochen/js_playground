function add(x) {
    return function (y) {
        return x + y
    }
}

let x = add(2)
console.log(x(5)) //7

let y = add(5)
console.log(y(3)) // 8

console.log(add(4)(7)) // 11


function GetMyName(name) {
    this.name = name.toString()
    this.msg = `這是我的名字! ${this.name}`
    this.family = 'huang'
}

// GetMyName.prototype.getName = function () {
//     return this.name
// }
// GetMyName.prototype.getMsg = function () {
//     return this.msg
// }
// GetMyName.prototype.getFamily = function () {
//     return this.family
// }

GetMyName.prototype.name = 'hahaha';

(function () {
    this.getName = function () {
        return this.name
    }
    this.getMsg = function () {
        return this.msg
    }
    this.getFamily = function () {
        return this.family
    }
    this.changeName = function (name) {
        this.name = name
        return `已經將名稱改為${this.name}`
    }
}).call(GetMyName.prototype)


let tommy = new GetMyName('Tommy')

console.log(tommy.getName())
console.log(tommy.getMsg())
console.log(tommy.getFamily())
console.log(tommy.changeName('kkkk'))
console.log(tommy.getName())

let victor = new GetMyName('Victor')

console.log(victor.getName())
console.log(victor.getMsg())
console.log(victor.changeName('tttt'))
console.log(victor.getName())

