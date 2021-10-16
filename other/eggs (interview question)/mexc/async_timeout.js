function timeout(text) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log(text)
                resolve(`this is the time out resolve value ${text}`)
            }, 1000
        )
    })
}

async function runTimeOut() {
    await timeout(1)
    await timeout(2)
    await timeout(3)
    return 'The end of timeout funcs.'
}

// 第一種 then() 寫法
runTimeOut().then(() => {
    console.log('this is all the timeout funcs has run!')
})

// 第二種 await 寫法
async function endTimeout() {
    const result = await runTimeOut()
    console.log(result)
    console.log('this is all the timeout funcs has run!')
    console.log('and then do other things.')
}
endTimeout()

// 第三種 then + async 寫法
async function endTimeoutThen() {
    await runTimeOut().then((text) => {
        console.log(text)
        console.log('this is all the timeout funcs has run!')
    })
    console.log('and then do other things.')
}
// endTimeoutThen()

