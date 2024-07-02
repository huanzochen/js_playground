/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  let track = []
  let start = 0


  const backtrack = (nums, res, track, i) => {
    if (i === nums.length) {
      res.push([...track])
      return
    }

    track.push(nums[i])
    backtrack(nums, res, track, i + 1)
    track.pop()

    backtrack(nums, res, track, i + 1)

  }
  backtrack(nums, res, track, 0)
  return res
};

const arraySort = (a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length
  }

  // If length are equal, compare element by element
  for (let i = 0; i < a.length; a++) {
    if (a[i] !== b[i]) {
      return a[i] - b[i]
    }
  }

  // If all elements are equal, return 0
  return 0
}

const testCase = (source, result) => {
  const resultString = JSON.stringify(result.sort(arraySort))
  const executeRes = subsets(source)
  let executeResSorted
  let executeResString

  try {
    executeResSorted = executeRes.sort(arraySort)
  } catch (error) {
    console.error('Error sorting executedResSorted,', error)
  }

  try {
    executeResString = JSON.stringify(executeResSorted)
  } catch (error) {
    console.error("Error stringify executeRes,", error)
  }

  console.log(executeResString === resultString)
}

testCase([1, 2, 3], [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]])
testCase([0], [[], [0]])
testCase([1, 2, 3, 4], [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 4], [1, 3], [1, 3, 4], [1, 4], [2], [2, 3], [2, 3, 4], [2, 4], [3], [3, 4], [4]])