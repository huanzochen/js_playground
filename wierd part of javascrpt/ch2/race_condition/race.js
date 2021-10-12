/***
 * 
 * 這個程式會先執行 waitFunction() 
 * 而後馬上執行 setValueAddFunction() 
 * 然後經過 setTimeout 延遲後, 在吐出 value 的值, 
 * 因為有 promise, 導致下面的 console.log 會延遲執行.
 * 
 * 
 */


let value = 1
const waitFunction = async () => {
    console.log(`現在 value= ${ value }`)
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    await promise
    console.log(`現在 value= ${ value }`)
}

const setValueAddFunction = () => {
    value = 2
}

// 透過撰寫有 promise 的 setTimeout 便可實現 promise 的 timeout
waitFunction()
setValueAddFunction()



