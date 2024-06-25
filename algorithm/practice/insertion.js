const sortedArray = [1, 2, 6, 9, 10, 23, 342, 343, 555]
const insertNum = 111

/**
 * 
 * @param {*} num 
 * @param {*} array 
 * @returns array
 * 
 * this function will insert a num into a array using insertion.
 */

const insertion = (num, array) => {

  const temp = num
  let j = array.length - 1

  while (true) {
    if (j < 0) break
    if (!(j >= 0 && array[j] > temp)) break

    array[j + 1] = array[j]
    j = j - 1

    console.log(`Array is now looks like: ${array}`)
  }

  array[j + 1] = temp
  return array
}

const result = insertion(insertNum, sortedArray)
console.log(`The result array is ${result}`)