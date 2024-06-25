const nums = [8, 3, 5, 4, 7, 6, 1, 2]

const merge = (a, b) => {
  let aI = 0
  let bI = 0
  let res = []

  // The both of them haven't reach the end
  while (aI < a.length && bI < b.length) {
    if (a[aI] < b[bI]) {
      res.push(a[aI])
      aI++
    } else if (b[bI] <= a[aI]) {
      res.push(b[bI])
      bI++
    }
  }

  if (aI < a.length) {
    res.push(...a.slice(aI, a.length))
  } else if (bI < b.length) {
    res.push(...b.slice(bI, b.length))
  }

  return res
}

// put in two sorted array to test
// console.log(merge([1, 3, 4, 19], [2, 5, 7, 10, 11, 45]))

// The BreakDown just wants to let you know how the merge sort works.
const mergeSortBreakDown = (nums) => {
  if (nums.length <= 1) {
    console.log('nums:', nums)
    return nums
  }

  let mid = Math.floor(nums.length / 2)

  if (nums.length === 2) {
    let left = mergeSortBreakDown(nums.slice(0, mid))
    let right = mergeSortBreakDown(nums.slice(mid, nums.length))
    console.log('2 --- left:, right:', left, right)
    return merge(left, right)
  }

  if (nums.length === 4) {
    let left = mergeSortBreakDown(nums.slice(0, mid))
    let right = mergeSortBreakDown(nums.slice(mid, nums.length))
    console.log('4 --- left:, right:', left, right)
    return merge(left, right)
  }

  if (nums.length === 8) {
    let left = mergeSortBreakDown(nums.slice(0, mid))
    let right = mergeSortBreakDown(nums.slice(mid, nums.length))
    console.log('8 --- left:, right:', left, right)
    return merge(left, right)
  }

}

// console.log('mergeSortBreakDown:', mergeSortBreakDown([2, 7, 8, 3, 12, 34, 5, 78]))

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums
  }

  let mid = Math.floor(nums.length / 2)
  let left = mergeSort(nums.slice(0, mid))
  let right = mergeSort(nums.slice(mid, nums.length))
  return merge(left, right)

}
// console.log('mergeSort:', mergeSort([22, 3, 4, 66, 21, 12, 456, 34, 67, 88]))

const merge2 = (nums, lo, mid, hi) => {
  console.log('lo, mid, hi:', lo, mid, hi)

  let aI = lo
  let bI = mid + 1

  let res = []

  // 注意這是 左閉右閉 區間
  while (aI <= mid && bI <= hi) {
    if (nums[aI] < nums[bI]) {
      res.push(nums[aI])
      aI++
    }
    else {
      res.push(nums[bI])
      bI++
    }
  }
  if (aI <= mid) {
    res.push(...nums.slice(aI, mid + 1))
  } else if (bI <= hi) {
    res.push(...nums.slice(bI, hi + 1))
  }

  for (let i = lo; i <= hi; i++) {
    nums[i] = res[i - lo]
  }
}

const mergeSort2 = (nums, lo, hi) => {
  if (lo >= hi) { return }

  const mid = Math.floor((lo + hi) / 2)

  mergeSort2(nums, lo, mid)
  mergeSort2(nums, mid + 1, hi)

  merge2(nums, lo, mid, hi)
}

const nums2 = [22, 3, 4, 66, 21, 12, 456, 34, 67, 88]

mergeSort2(nums2, 0, nums2.length - 1)

console.log('nums2 by mergeSort2, nums2:', nums2)