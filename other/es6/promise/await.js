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

add1(10).then(v => {
    console.log(v)
})

async function add2(x) {
    const p_a = waitFor2Seconds(20)
    const p_b = waitFor2Seconds(30)
    return x + await p_a + await p_b
}

add2(10).then(v => {
    console.log(v)
})