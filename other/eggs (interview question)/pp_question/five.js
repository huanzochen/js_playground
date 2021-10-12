const nums = [1, 1, 2, 3]
const calcUniqueNums = function (nums) {
    let obj = {}

    for (const [num, i] of nums.entries()) {
        obj[num] = ''
    }

    const result = Object.keys(obj)
    return result
}


console.log(calcUniqueNums(nums))