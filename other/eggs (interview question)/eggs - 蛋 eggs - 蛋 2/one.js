'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin
})

process.stdin.on('end', function() {
    inputString = inputString.split('\n')

    main()
})

function readLine() {
    return inputString[currentLine++]
}


/*
 * Complete the 'triangleType' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY triangleToy as parameter.
 */

function triangleType(triangleToy) {

    // console.log('triangleToy:',triangleToy)

    const result = []

    for (let i = 0; i < triangleToy.length; i++) {
        const targetArray = triangleToy[i].split(' ')
        // console.log('targetArray:', targetArray)

        let count = new Set()
        let repeat = 0
        count.add(targetArray[0])
        if (count.has(targetArray[1])) {
            repeat = targetArray[1]
        }
        else {
            count.add(targetArray[1])
        }

        if (count.has(targetArray[2])) {
            repeat = targetArray[2]
        }
        else {
            count.add(targetArray[2])
        }

        console.log('repeat:', repeat)

        if (count.size === 3) result.push('None of these')
        else if (count.size === 2) {
            const compare = Array.from(count)
            const first = Number(compare[0])
            const second = Number(compare[1])
            console.log('first:', first)
            console.log('second:', second)
            if (repeat == first && (first + second > first && first + first > second)) {
                result.push('Isosceles')
            }
            else if (repeat == second && (second + second > first && first + second > second)) {
                result.push('Isosceles')
            }
            else {
                result.push('None of these')
            }
        }
        else if (count.size === 1) result.push('Equilateral')

    }
    // console.log('result:', result)
    return result
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const triangleToyCount = parseInt(readLine().trim(), 10)

    let triangleToy = []

    for (let i = 0; i < triangleToyCount; i++) {
        const triangleToyItem = readLine()
        triangleToy.push(triangleToyItem)
    }

    const result = triangleType(triangleToy)

    ws.write(result.join('\n') + '\n')

    ws.end()
}
