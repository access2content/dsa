function longestOnes(nums: number[], k: number): number {
  let maxConsecutive = Number.NEGATIVE_INFINITY;
  let remainingFlips = k;
  let start = 0;

  for (let end = 0; end < nums.length; end += 1) {
    //  1: If flipping possible, do it
    if (nums[end] === 0) {
      remainingFlips -= 1;
    }

    //  2: Ensure window is valid
    while (remainingFlips < 0) {
      if (nums[start] === 0) {
        remainingFlips += 1;
      }

      start += 1;
    }

    //  3: Update the max count
    maxConsecutive = Math.max(end - start + 1, maxConsecutive);
  }

  return maxConsecutive === Number.NEGATIVE_INFINITY ? 0 : maxConsecutive;
}
