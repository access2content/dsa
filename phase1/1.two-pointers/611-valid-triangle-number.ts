/*
Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:

Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
Example 2:

Input: nums = [4,2,3,4]
Output: 4
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000

function triangleNumber(nums: number[]): number {
};
*/

function triangleNumber(nums: number[]): number {
  if (nums.length < 3) {
    return 0;
  }
  let validTriangles = 0;

  nums.sort((a, b) => a - b);

  for (let current = nums.length - 1; current >= 2; current -= 1) {
    const lastNumber = nums[current];

    let left = 0;
    let right = current - 1;

    while (left < right) {
      if (nums[left] + nums[right] > lastNumber) {
        validTriangles += right - left;
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  return validTriangles;
}
