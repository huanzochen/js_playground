var Animal = {
    speak() {
        return this.name + ' makes a noise'
    }
}

class Dog {
    constructor(name) {
        this.name = name
    }
}

Object.setPrototypeOf(Dog.prototype, Animal)
const d = new Dog('aaadog')
console.log(d.speak())


