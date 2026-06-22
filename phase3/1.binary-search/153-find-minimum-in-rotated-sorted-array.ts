function findMin(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
}
