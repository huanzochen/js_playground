/**
 * 撰寫一個 fakeapi
 * 該 api 有一定機率會失敗, 故意的
 * 
 */

function fakeApi(url) {
    return new Promise(function (resolve, reject) {
        // 假設我要得到 1 ~ x 的隨機數
        let x = 4000
        let delay = Math.floor(Math.random() * x + 1)
        setTimeout(
            function () {
                if (delay > x - 500) {
                    reject('502 Connection Timeout :((')
                }
                else {
                    resolve(`This is the data about the website: ${url}`)
                }
            }, delay)
    })
}

for (let i = 0; i < 10; i++) {
    fakeApi('www.google.com')
        .then((response) => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}
