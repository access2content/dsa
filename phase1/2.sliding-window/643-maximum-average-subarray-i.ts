/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

function findMaxAverage(nums: number[], k: number): number {
};
*/

function findMaxAverage(nums: number[], k: number): number {
  //  1: Initialize the rolling sum
  let rollingSum = 0;
  for (let i = 0; i < k; i += 1) {
    rollingSum += nums[i];
  }

  //  2: Calculate the max sum
  let maxSum = rollingSum;
  for (let i = k; i < nums.length; i += 1) {
    rollingSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, rollingSum);
  }

  return maxSum / k;
}
