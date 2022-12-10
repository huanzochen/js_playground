const recursive = (x) => {

    if (x === 100) {
        console.log(`the calculation has done, the value is ${x}`)
    }
    else {
        x++
        console.log(`the value now is ${x}`)
        recursive(x)
    }
}


recursive(50)