function solution(nums: number[], k: number): number {
  if (k <= 0 || k > nums.length) {
    return 0;
  }

  let goodSubArrays = 0;
  let start = 0;
  const continuous = new Map<number, number>();

  for (let end = 0; end < nums.length; end += 1) {
    const currentNumber = nums[end];

    //  1: Increment the count for current element
    continuous.set(currentNumber, (continuous.get(currentNumber) || 0) + 1);

    //  2: Fix the window if required
    while (continuous.size > k) {
      //  2.1: Update the element count
      const currentCount = continuous.get(nums[start]) || 0;
      if (currentCount - 1 <= 0) {
        continuous.delete(nums[start]);
      } else {
        continuous.set(nums[start], currentCount - 1);
      }

      //  2.2: Move to the next element
      start += 1;
    }

    //  3: Update the subarray count if applicable
    goodSubArrays += end - start + 1;
  }

  return goodSubArrays;
}

function subarraysWithKDistinct(nums: number[], k: number): number {
  return solution(nums, k) - solution(nums, k - 1);
}
