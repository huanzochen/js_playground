function multiply(num1) {
    console.log(num1)
    return function multyply2(num2) {
        return num1 * num2	
    }
}



console.log(multiply(2)(5))


function mmultiply(num1) {
    console.log(num1)
    return function mutiply2(num2) {
        return function mutiply3(num3) {
            return num1 * num2 * num3
        }
    }
}

console.log(mmultiply(2)(3)(4))