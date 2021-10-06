// run this inside browser

const sing = () => {
    return 'LALALA'
}
sing()

const sing2 = async () => {
    return 'LALALA'
}
sing2()

const sing3 = async () => {
    return Promise.resolve('LALALA')
}
sing3()

const singError = async () => {
    throw 'OHHHHHHHHHH!'
    throw new Error('AHHHHHHHHH!!!')
    return Promise.resolve('LALALA')
}
singError()

singError()
    .then((text) => {
        console.log(`if it is resolved, the answer is ${text}`)
    })
    .catch((err) => { // 寫個 catch 的做法會是做一個可以捕捉的 error.
        console.log('there is a error, nooooo')
        console.log(err)
    })