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


// Complete the numberOfCharactersEscaped function below.
function numberOfCharactersEscaped(expression) {    
    // expression = '!#!#!!y#b#w!wp!#!lhu!l!uef!lj!!lfmsuyj!!#!#o!!!x#b'
    console.log('expression',expression)
    
    let escapeStart = false
    const eArr = Array.from(expression)
    const eObj = {}
    // console.log(Object.keys(eObj))
    
    let escapeLetterCount = 0
    
    for(const [index, char] of eArr.entries()){
        if(char === '#') {
            if(!escapeStart){
                console.log('met open #')
                console.log(eObj)
                escapeStart = true
                eObj[(Object.keys(eObj).length)] = []
            }
            else {
                console.log('met close #')
                escapeStart = false
            }
        }
        else if(escapeStart && char !== '#' && char !== '!') {
            // console.log(eObj[(Object.keys(eObj).length-1)])
           eObj[(Object.keys(eObj).length - 1)].push(char)
            if(index!== 0){
                if(eArr[index-1] === '!'){
                    console.log('find escape letter!')
                    escapeLetterCount++
                }
            }
        }
        // console.log(eObj)
    }
    console.log(eObj)
    console.log('escapeLetterCount:',escapeLetterCount)
    return escapeLetterCount
    
    
    


}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const expression = readLine();

    const res = numberOfCharactersEscaped(expression);

    ws.write(res + '\n');

    ws.end();
}
