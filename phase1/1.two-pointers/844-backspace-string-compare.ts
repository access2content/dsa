/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(n) time and O(1) space?

function backspaceCompare(s: string, t: string): boolean {
};
*/

function backspaceCompare(s: string, t: string): boolean {
  let sPointer = s.length - 1,
    tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    //  1: Find the character to match in s
    let toSkip = 0;
    while (sPointer >= 0 && (s[sPointer] === "#" || toSkip > 0)) {
      if (s[sPointer] === "#") {
        toSkip += 1;
      } else {
        toSkip -= 1;
      }

      sPointer -= 1;
    }

    //  2: Find the character to match in t
    toSkip = 0;
    while (tPointer >= 0 && (t[tPointer] === "#" || toSkip > 0)) {
      if (t[tPointer] === "#") {
        toSkip += 1;
      } else {
        toSkip -= 1;
      }

      tPointer -= 1;
    }

    //  3: Match character
    if (sPointer < 0 || tPointer < 0) {
      return sPointer === tPointer;
    }
    if (s[sPointer] !== t[tPointer]) {
      return false;
    }

    sPointer -= 1;
    tPointer -= 1;
  }

  return true;
}
