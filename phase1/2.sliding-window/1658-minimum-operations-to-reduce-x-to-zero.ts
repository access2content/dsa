function minOperations(nums: number[], x: number): number {
  let maxWindow = Number.NEGATIVE_INFINITY;

  //  1: Find the total sum
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num;
  }
  let requiredSum = totalSum - x;
  if (requiredSum < 0) {
    return -1;
  }
  if (requiredSum === 0) {
    return nums.length;
  }
  let start = 0;
  let runningSum = 0;

  for (let end = 0; end < nums.length; end += 1) {
    runningSum += nums[end];

    //  1: Create a valid window
    while (runningSum > requiredSum) {
      runningSum -= nums[start];
      start += 1;
    }

    //  2: Check if condition matched
    if (requiredSum === runningSum) {
      maxWindow = Math.max(maxWindow, end - start + 1);
    }
  }

  return maxWindow === Number.NEGATIVE_INFINITY ? -1 : nums.length - maxWindow;
}
