/*
https://leetcode.com/problems/reverse-string/description/

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

//  Do not return anything, modify s in-place instead
function reverseString(s: string[]): void {
}

*/
function reverseString(input: string[]): void {
  for (
    let left = 0, right = input.length - 1;
    left < right;
    left += 1, right -= 1
  ) {
    const temp = input[left];
    input[left] = input[right];
    input[right] = temp;
  }
}

const input = "vivek".split("");

reverse(input);
console.log(input.join(""));
