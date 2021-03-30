

var arr1 = [1, 2, [3, 4]]

var arr2 = [1, 2, [3, 4, [5, 6]]]


function flatten() {
  console.log(arr2)
  return '100'
}


/**
 * .reduce()
 * 
 * 用法:
 * arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
 */

// function flattenDeep(target) {
//   return target.reduce((accumulator, currentValue, currentIndex, originArray) => {
//     console.log('accumulator =')
//     console.log(accumulator)
//     console.log('currentValue =')
//     console.log(currentValue)
//     console.log(`currentIndex = ${currentIndex}`)
//     console.log('originArray =')
//     console.log(originArray)
//     console.log(`is it array? ${Array.isArray(currentValue)}`)
//     if (Array.isArray(currentValue)) {
//       return accumulator = accumulator.concat(flattenDeep(currentValue))
//     }
//     else {
//       return accumulator = accumulator.concat(currentValue)
//     }
//   }, [])  
// }

function flattenDeep(target) {
    return target.reduce((accumulator, currentValue, currentIndex, originArray) => Array.isArray(currentValue) ? accumulator.concat(flattenDeep(currentValue)) : accumulator.concat(currentValue), [])
  }


let result = flattenDeep(arr2)
console.log(`result = ${result}`)