'use strict'

//ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes

class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    // Getter 
    // The get syntax binds an object property to a function that will be called when that property is looked up.
    get area() {
        return this.calcArea()
    }
    // Method 方法
    calcArea() {
        return this.height * this.width
    }

    // Static Method 靜態方法 通常做於應用程式的工具函數。
    static calcMultiRectangleArea(a, b) {
        const aArea = a.height * a.width
        const bArea = b.height * b.width

        return aArea + bArea
    }
}

const testAboutRectangle = () => {
    // 宣告 p 的正方形
    let p1 = new Rectangle(2, 3)
    console.log(p1.height + p1.width)
    console.log(p1.area)

    let p2 = new Rectangle(7, 8)
    console.log(p2.height + p2.width)
    console.log(p2.area)

    console.log(`p1 + p2 = ${Rectangle.calcMultiRectangleArea(p1, p2)}`)
}
// testAboutRectangle()


class Animal {
    constructor(type, color) {
        this.type = type
        this.color = color
    }

    // getter
    get colorOfAnimal() {
        return this.getColor()
    }
    getColor() {
        return this.color
    }
    
    // method
    speak() {
        return this
    }
    static eat() {
        return this
    }
}


const testAboutAnimal = () => {
    let cat = new Animal('cat', 'brown')
    console.log(cat.speak())
    // let speak = cat.speak
    let { speak } = cat
    console.log(speak())

    console.log(Animal.eat())
    // let eat = Animal.eat
    let { eat } = Animal
    console.log(eat())
}
// testAboutAnimal()

class Dog extends Animal {
    speak() {
        return this.type + ' ' + 'barks'
    }
}

const d1 = new Dog('dog', 'yellow')
console.log(d1.speak())



