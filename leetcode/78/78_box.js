/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  let track = []
  let start = 0


  const backtrack = (nums, res, track, start) => {
    // base case, when start exceeds nums.length, it will not execute for loop, so it will automatically end the function.
    res.push([...track])

    for (let i = start; i < nums.length; i++) {
      const current = nums[i]
      track.push(current)
      backtrack(nums, res, track, i + 1)
      track.pop()
    }
  }
  backtrack(nums, res, track, start)
  return res
};


const testCase = (source, result) => {
  const resultString = JSON.stringify(result)
  const executeRes = subsets(source)
  let executeResString

  try {
    executeResString = JSON.stringify(executeRes)
  } catch (error) {
    console.error("Error stringify executeRes,", error)
  }
  console.log(executeResString === resultString)
}

testCase([1, 2, 3], [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]])
testCase([0], [[], [0]])
testCase([1, 2, 3, 4], [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 4], [1, 3], [1, 3, 4], [1, 4], [2], [2, 3], [2, 3, 4], [2, 4], [3], [3, 4], [4]])