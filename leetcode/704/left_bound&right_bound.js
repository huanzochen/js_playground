const left_bound = (nums, target) => {
  let l = 0
  let r = nums.length

  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2)
    console.log('l:', l, 'r:', r, 'mid:', mid)
    if (nums[mid] === target) {
      console.log('r = mid;')
      r = mid
    } else if (nums[mid] < target) {
      console.log('l = mid + 1;')
      l = mid + 1
    } else if (nums[mid] > target) {
      console.log('r = mid;')
      r = mid
    }
  }
  return l
}

// A. 查找存在的數
// console.log(left_bound([1, 2, 2, 2, 3], 2) === 1)
console.log(left_bound([1, 2, 5, 5, 5, 6], 5))

// B. 查找不存在的數
// console.log(left_bound([1, 2, 2, 2, 3, 3, 3, 3, 5], 4) === 8) // 因為 nums[8] = 5, 是大於 4 的最小元素

const right_bound = (nums, target) => {
  let l = 0
  let r = nums.length

  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2)
    console.log('l:', l, 'r:', r, 'mid:', mid)
    if (nums[mid] === target) {
      console.log('l = mid + 1;')
      l = mid + 1
    }
    else if (nums[mid] < target) {
      console.log('l = mid + 1;')
      l = mid + 1
    }
    else if (nums[mid] > target) {
      console.log('r = mid;')
      r = mid
    }
  }

  return l - 1

}

// A. 查找存在的數
console.log(right_bound([1, 2, 2, 2, 3], 2))
// console.log(right_bound([1, 2, 2, 2, 3], 2) === 3)

console.log(right_bound([1, 2, 2, 3, 3, 5], 4)) 