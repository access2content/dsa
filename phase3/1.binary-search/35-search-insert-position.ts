function searchInsert(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    console.log("Mid", mid);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}
