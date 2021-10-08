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
    
    // 排序後的 array sort.
    // console.log(sort)
    
    // 利用 two pointer 的概念, 去尋找 nums[i] + nums[j] = -nums[k] 的值
    
    
    let comp = {}
    let result = {}
    
    
    for (let i = 0; i < sort.length ; i++) {
        for (let j = 0; j < sort.length; j++) {
            if (j === i) continue
            
            const shouldBeK = -(nums[i] + nums[j])
            // console.log(`-(nums[i] + nums[j]) = ${shouldBeK}`)
            if (!comp.hasOwnProperty(shouldBeK)) {
                comp[shouldBeK] = []
                comp[shouldBeK].push([nums[i], nums[j]])
            }
            else {
                comp[shouldBeK].push([nums[i], nums[j]])
            }
            
            for (let k = 0; k < sort.length; k++) {
                if (k === i || k === j) continue
                
                if (comp.hasOwnProperty(nums[k]) && nums[i] + nums[j] + nums[k] === 0) {
                    // console.log(`找到人了! 需要的值為 nums[k] = ${nums[k]} 這個 comp[k].length 為 ${comp[k].length} `)
                    // console.log(`當下 nums[i] 為 ${nums[i]}, nums[j] 為 ${nums[j]}`)
                    
                    let pair = nums[i] + nums[j] + nums[k]
                    if (!result.hasOwnProperty(pair)) {
                        result[pair] = []
                        result[pair].push({})
                        result[pair][0].hasOwnProperty(nums[i]) ? result[pair][0][nums[i]]++ : result[pair][0][nums[i]] = 1
                        result[pair][0].hasOwnProperty(nums[j]) ? result[pair][0][nums[j]]++ : result[pair][0][nums[j]] = 1
                        result[pair][0].hasOwnProperty(nums[k]) ? result[pair][0][nums[k]]++ : result[pair][0][nums[k]] = 1
                    }
                
                    let isRepeat = false
                    for (const [pIndex, pChild] of result[pair].entries()) {
                        // if (nums[i] === 0 && nums[j] === 0 && nums[k] === 0) {
                        //     // console.log('i see !')
                        // }
                        if (nums[i] === 0 && nums[j] === 0 && nums[k] === 0 && Object.keys(pChild).length === 1 && pChild.hasOwnProperty(nums[i]) && pChild.hasOwnProperty(nums[j]) && pChild.hasOwnProperty(nums[k])) {
                            // console.log('i see !')
                            // console.log('Object.keys(pChild).length', Object.keys(pChild).length)
                            // console.log(pChild)
                            isRepeat = true
                            break
                        }
                        else if (pChild.hasOwnProperty(nums[i]) && pChild.hasOwnProperty(nums[j]) && pChild.hasOwnProperty(nums[k]) && Object.keys(pChild).length > 1 && (nums[i] !== 0 || nums[j] !== 0 || nums[k] !== 0)) {
                            isRepeat = true
                            break
                        };

                    }
                    if (!isRepeat) {
                        const nowIndex = result[pair].length
                        result[pair].push({})
                        result[pair][nowIndex].hasOwnProperty(nums[i]) ? result[pair][nowIndex][nums[i]]++ : result[pair][nowIndex][nums[i]] = 1
                        result[pair][nowIndex].hasOwnProperty(nums[j]) ? result[pair][nowIndex][nums[j]]++ : result[pair][nowIndex][nums[j]] = 1
                        result[pair][nowIndex].hasOwnProperty(nums[k]) ? result[pair][nowIndex][nums[k]]++ : result[pair][nowIndex][nums[k]] = 1
                    }
                }
                
            }
        }
    }
    
    // console.log(comp)
    // console.log(result)
    
    if (Object.keys(result).length === 0) return []
    
    let resultArray = []
    for (const [i, numList] of result[0].entries()) {
        if (Object.keys(numList).length < 3) {
            resultArray.push([])
            for (const [j, num] of Object.keys(numList).entries()) {
                for (let k = 0; k < numList[num]; k++) {
                    resultArray[resultArray.length - 1].push(num)
                }
            }
        }
        else {
            resultArray.push([])
            for (const [j, num] of Object.keys(numList).entries()) {
                resultArray[resultArray.length - 1].push(num)
            }
        }
    }
    
    // console.log(resultArray)
    return resultArray
}


threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0])