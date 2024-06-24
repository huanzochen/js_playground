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

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    console.log('nums:', nums)
    return nums
  }

  let mid = Math.floor(nums.length / 2)

  if (nums.length === 2) {
    let left = mergeSort(nums.slice(0, mid))
    let right = mergeSort(nums.slice(mid, nums.length))
    console.log('2 --- left:, right:', left, right)
    return merge(left, right)
  }

  if (nums.length === 4) {
    let left = mergeSort(nums.slice(0, mid))
    let right = mergeSort(nums.slice(mid, nums.length))
    console.log('4 --- left:, right:', left, right)
    return merge(left, right)
  }

  if (nums.length === 8) {
    let left = mergeSort(nums.slice(0, mid))
    let right = mergeSort(nums.slice(mid, nums.length))
    console.log('8 --- left:, right:', left, right)
    return merge(left, right)
  }

}

console.log('mergeSort:', mergeSort([2, 7, 8, 3, 12, 34, 5, 78]))