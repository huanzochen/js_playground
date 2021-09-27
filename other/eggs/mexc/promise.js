


// 寫好 Promise 後用 await 解
// ref:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/await
// async function loop() {
//     for (var i = 0; i < 6; i++) {
//         let j = i
//         await timeout(j)
//     }
// }
// loop()

// function timeout(j) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log(j)
//             resolve()
//         }, 1000)
//     })
// }


// 不好的解法
// timeout(1).then(() => {
//     timeout(2).then(() => {
//         timeout(3).then(() => {
//             timeout(4).then(() => {
//                 timeout(5)
//             })
//         })
//     })
// })



// 待解的題目, 不用 await 的情況下寫出 promise 的語句
// function delay(j, donext) {

// }
// for (var i = 0; i < 6; i++) {
//     let j = i
//     console.log(j)
// }


// 如果要設計一個 function, 會在1秒後印出對應秒數的值.
// 不用 for 迴圈的情況下可以這樣解

// let j = 0
// delayFunc(j)
// function delayFunc(j) {
//     if (j < 6) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 console.log(j)
//                 j++
//                 delayFunc(j)
//             }, 1000)
//         })
//     }
// }