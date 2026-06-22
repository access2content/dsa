function search(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    //  Left side sorted
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    //  Right side sorted
    else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}
