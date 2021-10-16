function timeoutify(text, delay, nextFunc) {
    setTimeout(
        function () {
            console.log(`The text have to show that is ${text}`)
            
            if (nextFunc) nextFunc()
        }
        , delay)
}


timeoutify('1', 1000, () => {
    timeoutify('2', 2000, () => {
        timeoutify('3', 3000, () => {
            timeoutify('4', 4000, () => {
                timeoutify('5', 1000)
            })
        })
    })
})