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



