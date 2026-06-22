function searchRange(nums: number[], target: number): number[] {
  const left = findBoundary(nums, target, (a: number, b: number) => a < b);
  if (left === nums.length || nums[left] !== target) {
    return [-1, -1];
  }

  const right = findBoundary(nums, target, (a: number, b: number) => a <= b);
  return [left, right - 1];
}

const findBoundary = (
  nums: number[],
  target: number,
  predicate: Function,
): number => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (predicate(nums[mid], target)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};
