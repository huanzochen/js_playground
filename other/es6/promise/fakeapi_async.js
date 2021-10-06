function fakeApi(url) {
    return new Promise(function (resolve, reject) {
        // 假設我要得到 1 ~ x 的隨機數
        let x = 2000
        let delay = Math.floor(Math.random() * x + 1)
        setTimeout(
            function () {
                if (delay > x - 1000) {
                    reject('502 Connection Timeout :((')
                }
                else {
                    resolve(`This is the data about the website: ${url}`)
                }
            }, delay)
    })
}

// fakeApi('www.google.com')
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

async function makeApiCall() {
    try {
        const result = await fakeApi('www.google.com')
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}

// makeApiCall()
// makeApiCall()
// makeApiCall()
// makeApiCall()

async function makeApiCallThen() {
    await fakeApi('www.google.com')
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

makeApiCallThen()
makeApiCallThen()
makeApiCallThen()
makeApiCallThen()