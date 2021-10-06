
// ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function

// 一個共用的 Promise
function waitFor2Seconds(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x)
        }, 2000)
    })
}

async function add1(x) {
    const a = await waitFor2Seconds(20)
    const b = await waitFor2Seconds(30)
    return Promise.resolve(x + a + b)
}

// add1 因為分別宣告了其 await, 所以其執行時間會是 2 + 2 是 4秒.
add1(10).then(v => {
    console.log(v, 'the add1 answer')
})

async function add2(x) {
    const p_a = waitFor2Seconds(20)
    const p_b = waitFor2Seconds(30)
    return x + await p_a + await p_b
}

// add2 在最後才宣布了 await, 因此他的計時器是一起被宣告, 他的執行時間會是 2 秒.
add2(10).then(v => {
    console.log(v, 'the add2 answer')
})


// 第三種純 promise 的寫法, 其實看起來, 這過程是一樣的.
function add3(x) {
    return new Promise(function (resolve, reject) {
        waitFor2Seconds(20).then((y) => {
            waitFor2Seconds(20).then((z) => {
                resolve(x + y + z)
            })
        })
        // 無法套用這種寫法 因為要這樣取不到 y, 所以這兩者還是有不同. 
        // waitFor2Seconds(20)
        //     .then((y) => {
        //         return waitFor2Seconds(20)
        //     })
        //     .then((z) => {
        //         resolve(x + y + z)
        //     })
    })
}

add3(20).then((v) => {
    console.log(v, 'the add3 number')
})