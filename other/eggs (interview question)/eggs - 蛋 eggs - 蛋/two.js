'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'starsAndBars' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndex
 *  3. INTEGER_ARRAY endIndex
 */

function starsAndBars(s, startIndex, endIndex) {
    s=  '|||||*****\
*|**|****|\
******|*|*\
||*|******\
|*||**|***\
|***|**||*\
|**|***|*|\
*|**||***|\
******|*||\
|*****||||'
    startIndex = [53,7,16,65]
    endIndex = [93,75,81,80]
    
    //22 42 39 7
    
    
    // Write your code here
    console.log('s:', s)
    const sArr = Array.from(s)
    console.log('startIndex:',startIndex)
    console.log('endIndex:', endIndex)
    
    let result = []
    const sObj = {}
    
    for(let i = 0; i < startIndex.length; i++){
        // console.log(startIndex[i], endIndex[i])
        
        const starLength = endIndex[i] - (startIndex[i] - 1)
        console.log('starLength:',starLength)
        let isBar = false 
        let starCount = 0
        let starResult = 0
        for(let j = (startIndex[i] -1); j <= ((startIndex[i] -1) + starLength); j++ ){
            if(s[j] === '|'){
                if(isBar){
                    starResult = starCount
                }
                else if(!isBar) {
                    isBar = true
                }
            }
            if(isBar && s[j] === '*'){
                starCount++
            }
        }
        result.push(starResult)
        
        
    }
    
    console.log('result:',result)
    
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const startIndexCount = parseInt(readLine().trim(), 10);

    let startIndex = [];

    for (let i = 0; i < startIndexCount; i++) {
        const startIndexItem = parseInt(readLine().trim(), 10);
        startIndex.push(startIndexItem);
    }

    const endIndexCount = parseInt(readLine().trim(), 10);

    let endIndex = [];

    for (let i = 0; i < endIndexCount; i++) {
        const endIndexItem = parseInt(readLine().trim(), 10);
        endIndex.push(endIndexItem);
    }

    const result = starsAndBars(s, startIndex, endIndex);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
