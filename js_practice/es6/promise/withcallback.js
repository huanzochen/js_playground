// 試著去模擬一個單純的 callback


function printSome(text, delay, func) {
    setTimeout(function () {
        console.log(`我要顯示的 text 是 ${text}`)

        // 如果這個東西執行玩了之後, 接著就看要繼續做什麼 (如果有的話)
        console.log(typeof func) // 沒有宣告 function 的時候會是 undefined, 如果有的話會是 function.
        if (func) func()
    }, delay)
}


// 將所有 function 包在了 setTimeout 執行了以後
// 就要確保, 如果 setTimeout 執行完, 馬上執行下一個 function

printSome('這是第一個 function', 1000, function () {
    printSome('如果第一個成功的話, 這就會是第二個', 1000, function () {
        printSome('我已經漸漸看不清大括號的樣子了的第三個', 1000, function () {
            printSome('這件事真的會成為一個噩夢, 哈', 1000)
        })
    })    
})