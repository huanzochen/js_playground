
let callCount = 0
let iterationCount = 0

const permutation = (str, prefix) => {
    callCount++
    if (str.length === 0) return console.log('prefix:', prefix)
    else {
        for (let i = 0; i < str.length; i++) {
            iterationCount++
            let rem = str.slice(0, i) + str.slice(i + 1)

            console.log('i:', i)
            console.log('first:', rem)
            console.log('second:', prefix + str[i])

            permutation(rem, prefix + str[i])
        }
    }
}

console.log(permutation('1234567', ''))
console.log('iterationCount:', iterationCount)
console.log('callCount:', callCount)