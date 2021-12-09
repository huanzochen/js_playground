/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let count = 0
    
    const sArr = Array.from(s)
    
    
    for(let i = 0; i < sArr.length; i++ ){
        switch(sArr[i]){
            case 'M':
                count += 1000
                break;
            case 'D':
                count += 500
                break;
            case 'C':
                if( i < sArr.length - 1 && (sArr[i+1] === 'D' || sArr[i+1] === 'M')) count -= 100
                else count += 100
                break;
            case 'L':
                count += 50
                break;
            case 'X':
                if( i < sArr.length - 1 && (sArr[i+1] === 'L' || sArr[i+1] === 'C')) count -= 10
                else count += 10
                break;
            case 'V':
                // console.log('count += 5 ', count, 'count += 5 ', count + 5)
                count += 5
                // console.log('count:', count)
                break;
            case 'I':
                if( i < sArr.length - 1 && (sArr[i+1] === 'V' || sArr[i+1] === 'X')) count -=1
                else count += 1
                // console.log('count:', count)
                break;
        }
        // console.log('count:', count)
    }
    
    // console.log('result count:', count)
    return count 
};
console.log(romanToInt('IV'))
