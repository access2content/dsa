/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?


// Do not return anything, modify nums in-place instead.
function moveZeroes(nums: number[]): void {
};
*/

function moveZeroes(nums: number[]): void {
  for (let write = 0, read = 0; read <= nums.length - 1; read += 1) {
    //  Skip element that don't need to be written
    if (nums[read] === 0) {
      continue;
    }

    //  Write element to correct location
    const temp = nums[write];
    nums[write] = nums[read];
    nums[read] = temp;

    write += 1;
  }
}

/*
Invariant:
- [0, write - 1] are non-zero in original order
- [read, end] are unprocessed
- [0, read-1] are always in the expected format
- [write, read - 1] are all zeroes

Movement Rules:
- Read always moves forward pointing to next element to process
- Write moves forward after writing non-zero element

Why Safe:
- Every non-zero element is written once to the write location
- All processed elemnts are in the correct order
*/
