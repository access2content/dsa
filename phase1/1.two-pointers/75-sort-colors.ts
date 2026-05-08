/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 
Follow up: Could you come up with a one-pass algorithm using only constant extra space?


//  Do not return anything, modify nums in-place instead.
function sortColors(nums: number[]): void {
};
*/

function sortColors(nums: number[]): void {
  let left = 0,
    right = nums.length - 1;

  for (let read = 0; read <= right; read += 1) {
    if (nums[read] === 0) {
      const temp = nums[left];
      nums[left] = nums[read];
      nums[read] = temp;
      left += 1;
    } else if (nums[read] === 2) {
      const temp = nums[right];
      nums[right] = nums[read];
      nums[read] = temp;
      right -= 1;
      read -= 1;
    }
  }
}

/*
Invariant:
- [0, left - 1] are all 0s
- [right + 1, end] are all 2s
- [left, read - 1] are all 1s

Movement rules:
- read is incremented each time except after swapping with right side
- left is incremented after putting 0
- right is decremented after putting 2

Why safe:
- left marks the next position for 0
- right marks the next position for 2
- read is incremented only after the element is processed
- swapping with left is safe to increment since all elements are already processed
- swapping with right means read cannot be incremented as the swapped element is not processed
*/
