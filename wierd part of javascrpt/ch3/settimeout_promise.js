function delay(time, step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`step= ${step}`)
            console.log(`after delayed ${time / 1000} second, goto ${step}`)
            resolve([time, step]) // resolve 能不能傳直? 這句有問題 Ans:看 document resolve只能傳 1 個值
        }, time)
    })
}

delay(1000, 'step2') // delay x second
    .then(function step2(information) {
        console.log(`it is done for delaying ${information[0] / 1000} seconds in step2`)
        return delay(2000, 'step3')
    })
    .then(function step3(information) {
        for (let i = 0 ; i < 3 ; i++) {
            console.log(` i am a step3 loop with promise, this is my ${i} time running!`)
            setTimeout(function () {
                console.log(`我會亂出現, 這是我的第 ${i} 次, after 我 delayed ${information[0] / 1000} 秒`)
            }, information[0])
        }
        console.log(`it is done for delaying ${information[0] / 1000} seconds in step3!`)
        return delay(2000, 'step4')
    })
    .then(function step4(information) {
        console.log(`it is in ${information[1]}! after delaying ${information[0] / 1000} seconds`) // resolve 能不能傳直? 這句有問題 Ans:看 document resolve只能傳 1 個值
        return new Promise(function(resolve, reject) {
            setTimeout(function () {
                console.log(`第四步的 setTimeout 因為有包在 Promise 裡面所以應該可以照著步驟走 而不會先啟動, 總共等待了 ${information[0] / 1000}秒`)
                resolve(delay(5000, 'step5'))
            }, information[0])
        })
    })
    .then(function step5(information) {
        console.log(`來到 ${information[1]}`) // resolve 能不能傳直? 這句有問題 Ans:看 document resolve只能傳 1 個值
    })

console.log('something will happendfirst here before settimeout')
for (let i = 0 ; i < 5 ; i++) {
    console.log(` i am a for loop without promise, this is my ${i} time running!`)
}