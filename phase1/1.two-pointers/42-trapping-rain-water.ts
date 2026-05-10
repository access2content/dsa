/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

function trap(height: number[]): number {
};
*/

function trap(height: number[]): number {
  let totalWater = 0;

  let left = 0,
    right = height.length - 1;

  let leftMax = -1,
    rightMax = -1;

  while (left < right) {
    //  1: Update Max left and Max Right
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    //  Find the limiting side
    if (height[left] < height[right]) {
      if (height[left] < leftMax) {
        totalWater += leftMax - height[left];
      } else {
        leftMax = height[left];
      }

      left += 1;
    } else {
      if (height[right] < rightMax) {
        totalWater += rightMax - height[right];
      } else {
        rightMax = height[right];
      }

      right -= 1;
    }
  }

  return totalWater;
}
