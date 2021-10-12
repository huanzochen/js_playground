// please make function multiply(2)(5); // 10 =>

function multiply(a) {
    return function(b) {
        return a * b
    }
}

console.log(multiply(2)(5))

/** 
 * please make function myBind() that showMe.myBind() can get the this value in me object.
const me = {
    'name': 'tommy',
    'age': 24
}

function showMe() {
    return `my name is ${this.name}, age is ${this.age}`
}

*/

const me = {
    'name': 'tommy',
    'age': 24
}

function showMe() {
    return `my name is ${this.name}, age is ${this.age}`
}

function myBind(obj) {
    
}