function lengthOfLongestSubstring(s: string): number {
  const visited = new Set();
  let start = 0,
    end = 0;
  let longestLength = Number.NEGATIVE_INFINITY;

  while (end < s.length) {
    //  1: If repeated character found, shrink the window
    if (visited.has(s[end])) {
      visited.delete(s[start]);
      start += 1;
    }
    //  2: Else, keep expanding the window
    else {
      longestLength = Math.max(longestLength, end - start + 1);
      visited.add(s[end]);
      end += 1;
    }
  }

  return longestLength === Number.NEGATIVE_INFINITY ? 0 : longestLength;
}
