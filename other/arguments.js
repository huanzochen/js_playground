function func1(a, b, c) {
    console.log(arguments)
    return arguments
}

console.log(func1('asad', 'two', 'three', 'four'))