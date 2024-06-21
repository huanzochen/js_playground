/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0
  let r = nums.length
  console.log('l:', l, 'r:', r)

  while (l < r && l !== r) {
      const mid = Math.floor(l + ((r - l) / 2))
      console.log('mid:', mid)
      if (nums[mid] === target) {
          return mid
      }
      else if (nums[mid] < target) {
          l = mid + 1
      }
      else if (nums[mid] > target) {
          r = mid
      }
  }
  return -1
};

// console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))