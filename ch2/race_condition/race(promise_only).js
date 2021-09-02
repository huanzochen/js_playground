

let value = 1
const waitFunction = () => {
    console.log(`現在 value= ${ value }`)
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })

    promise.then(() => {
        console.log(`現在 value= ${ value }`)
    })
}

const setValueAddFunction = () => {
    value = 2
}

waitFunction()
setValueAddFunction()

