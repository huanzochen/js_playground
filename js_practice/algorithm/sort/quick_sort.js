const numsExampleForPivotHelper = [5, 8, 2, 1, 4, 3, 7, 6, 0]

const pivotHelper = (nums, start, end) => {
  // The number which should be place at the left of the pivot.
  const pivot = nums[start]
  let pivotIndex = start

  // Put the elements smaller than pivot at the first, and bigger than the pivot at the end
  for (let i = start + 1; i <= end; i++) {
    const current = nums[i]
    if (current < pivot) {
      pivotIndex++

      // If example: i === 1 && pivotIndex === 1, no need to swap
      if (i !== pivotIndex) swap(i, pivotIndex, nums)
    }
  }
  // Put the pivot at the middle.
  swap(start, pivotIndex, nums)

  return pivotIndex
}

const swap = (x, y, nums) => {
  const temp = nums[x]
  nums[x] = nums[y]
  nums[y] = temp
  return nums
}

// console.log(pivotHelper(numsExampleForPivotHelper, 0, numsExampleForPivotHelper.length - 1));
// console.log('numsExampleForPivotHelper:',numsExampleForPivotHelper)

// const debugPivotIndex = 5;
// const debugNums = [0, 2, 1, 4, 3, 5, 7, 6, 8];
// console.log(
//   pivotHelper(debugNums, debugPivotIndex + 1, debugNums.length-1),
//   "debugNums:",
//   debugNums
// );

const simpleSample = [5, 8, 2, 1, 4, 3, 7, 6, 0]
const numsExampleForQuickSort = [
  5, 8, 2, 1, 4, 3, 7, 6, 0, -100, 2000, 2039, 495, 5, 5, 5, 5, 5,
]

const quick_sort = (nums, left, right) => {
  // console.log("left:", left, "right:", right);
  if (left < right) {
    const pivotIndex = pivotHelper(nums, left, right)

    // console.log("pivotIndex:", pivotIndex);

    quick_sort(nums, left, pivotIndex - 1)
    quick_sort(nums, pivotIndex + 1, right)
  }

  return nums
}

console.log(
  'quick_sort:',
  quick_sort(numsExampleForQuickSort, 0, numsExampleForQuickSort.length - 1)
)
