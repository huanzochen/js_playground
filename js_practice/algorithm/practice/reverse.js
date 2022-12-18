// const sortedArray = [1, 4, 6, 11, 23, 34, 45]
const sortedArray = [3, 4, 20, 49, 58, 99, 100, 201, 222]

const reverse = (array) => {
    let pMax = array.length - 1
    let pMin = 0
    let temp = 0

    // temp = sortedArray[pMax]
    // sortedArray[pMax] = sortedArray[pMin]
    // sortedArray[pMin] = temp

    while (pMax > (array.length - 1) / 2) {
        temp = sortedArray[pMax]
        sortedArray[pMax] = sortedArray[pMin]
        sortedArray[pMin] = temp
        pMax = pMax - 1
        pMin = pMin + 1
    }

    return sortedArray
}


const result = reverse(sortedArray)
console.log('result:', result)




/*** Below is refs ***/

// length must be eight
// 0123 4567
const odd = 7 

// length muse be nine
// 0123  4  5678
const even = 8 

console.log(`odd / 2 = ${odd / 2}`)
console.log(`even / 2 = ${even / 2}`)