const left_bound = (nums, target) => {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    console.log("l:", l, "r:", r, "mid:", mid);
    if (nums[mid] === target) {
      console.log("r = mid;");
      r = mid;
    } else if (nums[mid] < target) {
      console.log("l = mid + 1;");
      l = mid + 1;
    } else if (nums[mid] > target) {
      console.log("r = mid;");
      r = mid;
    }
  }
  return l;
};

console.log(left_bound([1, 2, 2, 2, 3, 3, 3, 3, 5], 4) === 8); // 因為 nums[8] = 5, 是大於 4 的最小元素
// console.log(left_bound([1, 2, 2, 2, 3], 2) === 1);
