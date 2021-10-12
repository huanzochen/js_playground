/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    
    // console.log(nums)
    let sort = nums.sort(function (a, b) {
        return a - b
    })
    
    // 排序出來的值已經由小到大.
    // 竟然是由小到大, 首先就要排除大於0 的數字, 因為再怎麼加, 都不會 = 0
    // console.log(sort)
    

    let len = sort.length
    // console.log(len, 'len')
    let result = []

    // 製造 a,b 為 pointer, temp 為相加後所得的數字.
    for (let i = 0; i < len; i++) {
        // console.log(i, 'i')
        let temp = -nums[i]
        let a = i + 1
        let b = len - 1

        if (nums[i] > 0) {
            // 比對的數字已經大於 0, 代表不可能再湊到 nums[a] + nums[b] = 0
            break
        }
        else if (i > 0 && nums[i] === nums[i - 1]) {
            // i = 0 一定是 temp, 所以會跳過.
            // 跳過重複的值.
            continue
        }

        // 開始跑指針
        // whilw a>b === true 的時候就停止
        while (a < b) {
            if (nums[a] + nums[b] === temp) {
                result.push([nums[i], nums[a], nums[b]])
                while (a < b && nums[a] === nums[a + 1]) a++
                while (a < b && nums[b] === nums[b + 1]) b--
                a++
                b--
            }
            else if (nums[a] + nums[b] > temp) {
                b = b - 1
            }
            else if (nums[a] + nums[b] < temp) {
                a = a + 1              
            }
        }
    }

    console.log(result)
}


threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0])