function Animal(type, color) {
    this.type = type
    this.color = color
}

Animal.prototype.speak = function() {
    return this
}

Animal.eat = function() {
    return this
}

const testAnimal = () => {
    let cat = new Animal('cat', 'red')
    let speak = cat.speak
    console.log(cat.speak())
    console.log(speak())

    let eat = Animal.eat
    console.log(Animal.eat())
    console.log(eat())
}

testAnimal()

class Dog extends Animal {
    constructor(type, color, name) {
        super(type, color)
        this.name = name
    }

    speak() {
        return this.type + ' ' + this.name + ' ' + 'barks'
    }
}

let d1 = new Dog('dog', 'black', 'poopoo')
console.log(d1.speak())


////////////////////////////////////////////////

let obj = {
    'name': 'tommy',
    'gender': 'male',

    info: function() {
        return `this guy is ${this.name}, is a ${this.gender}`
    }
}
console.log(obj.info())


var name = 'kevin'
var gender = 'female'
let newInfo = obj.info
// console.log(newInfo()) // Cannot read property 'name' of undefined in 'use strict'

obj.info = obj.info.bind(obj) // Explicit Hard Binding
let newInfo2 = obj.info
console.log(newInfo2())

