function minSubArrayLen(target: number, nums: number[]): number {
  let minimalLength = Number.POSITIVE_INFINITY;
  let start = 0;
  let rollingSum = 0;

  for (let end = 0; end < nums.length; end += 1) {
    rollingSum += nums[end];

    while (rollingSum >= target) {
      minimalLength = Math.min(end - start + 1, minimalLength);
      rollingSum -= nums[start];
      start += 1;
    }
  }

  return minimalLength === Number.POSITIVE_INFINITY ? 0 : minimalLength;
}
