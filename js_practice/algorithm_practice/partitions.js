const sorted = [1, 9, 23, 22, 31, 10, 18, 2, 19] // 最右邊為基準值

const quicksort = (sorted) => {
    let temp = 0

    let smallGroupIndex = 0
    // let bigGroupIndex = 0

    for (let i = 0; i < sorted.length - 1;i++) {
        if (sorted[i] < 19) {
            temp = sorted[i]
            sorted[i] = sorted[smallGroupIndex]
            sorted[smallGroupIndex] = temp
            smallGroupIndex++
        }
        // else if (sorted[i] > 19) {
        //     bigGroupIndex++
        // }

        console.log('smallGroupIndex:', smallGroupIndex)
    }

    temp = sorted[sorted.length - 1]
    sorted[sorted.length - 1] = sorted[smallGroupIndex]
    sorted[smallGroupIndex] = temp

    return sorted
}


const result = quicksort(sorted)
console.log(result)