function numSubarraysWithSum(nums: number[], goal: number): number {
  let totalSubarrays = 0;
  let start = 0;
  let runningSum = 0;

  for (let end = 0; end < nums.length; end += 1) {
    runningSum += nums[end];

    //  1: Shrink the window till wherever possible
    while (runningSum > goal) {
      runningSum -= nums[start];
      start += 1;
    }

    if (runningSum === goal) {
      let tempStart = start;

      //  1: Count all valid starts
      while (tempStart <= end && runningSum === goal) {
        totalSubarrays += 1;

        if (nums[tempStart] === 1) {
          break;
        }

        tempStart += 1;
      }
    }
  }

  return totalSubarrays;
}
