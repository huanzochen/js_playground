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
    let escapeStart = false
    const eArr = Array.from(expression)
    let escapeLetterCount = 0
    
    for(const [index, char] of eArr.entries()){
        if(char === '#') {
            if(!escapeStart){
                escapeStart = true
            }
            else {
                escapeStart = false
            }
        }
        else if(escapeStart && char !== '#' && char !== '!') {
            if(index!== 0){
                if(eArr[index-1] === '!'){
                    escapeLetterCount++
                }
            }
        }
    }
    return escapeLetterCount
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const expression = readLine();

    const res = numberOfCharactersEscaped(expression);

    ws.write(res + '\n');

    ws.end();
}
