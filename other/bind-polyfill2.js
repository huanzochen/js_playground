let animal = {
    country: 'taiwan',
    type: 'monkey'
}

function speak() {
    return `${this.type} in ${this.country} rah rah !`
}

let aMonkey = speak.bind(animal)

console.log(aMonkey())

Function.prototype.newBind = function (newThis) {
    let targetThis = this
    return function() {
        return targetThis.apply(newThis)
    }
}

console.log(speak.bind(animal)())

//////////////////////////////////////////////////////////

let sandra = {
    'region': 'taoyuan',
    'gender': 'female'
}

function liveIn() {
    return `this person live in ${this.region}, her hair is ${arguments[1]}`
}

console.log(liveIn.bind(sandra)())

Function.prototype.myBind = function(newThis) {
    if (typeof this !== 'function') {
        throw new Error(this + 'cannot be bound as it\'s not callable!')
    }

    let thisArguments = Array.prototype.slice.call(arguments)

    // 捕捉這個 function 的 this
    let targetFunc = this
    // 可以用匿名函式, 我認為因為有另外指派 this
    return () => {
        return targetFunc.apply(newThis, thisArguments)
    }
}

console.log(liveIn.myBind(sandra, 'long hair')())