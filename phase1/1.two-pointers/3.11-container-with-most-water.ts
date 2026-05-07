/*
https://leetcode.com/problems/container-with-most-water/description/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 
Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104


function maxArea(height: number[]): number{
}
 */

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let bestArea = -1;

  while (left < right) {
    //  1: Check if new area is the best
    let area = Math.min(height[left], height[right]) * (right - left);
    if (area > bestArea) {
      bestArea = area;
    }

    //  2: Update pointers based on best outcome
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return bestArea;
}

/*
Invariant:
- `maxArea` stores the largest area found so far
- If a larger valid area exists, it must still be within [left, right]

Movement rule:
- Move the side that is the smallest

Why safe:
- Area is limited by the shorter height
- Keeping the shorter height while reducing width cannot produce a larger area
- Therefore, the smaller height cannot be part of a better solution with the current width
- Moving the smaller side is the only chance to find a taller boundary and increase area
*/
