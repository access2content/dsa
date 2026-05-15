function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }

  //  1: Generate frequency for string t
  let frequency = new Array(128).fill(0);
  for (const char of t) {
    frequency[char.charCodeAt(0)] += 1;
  }

  let minWindowSize = Number.POSITIVE_INFINITY;
  let output = "";
  let start = 0;
  let totalMatches = 0;
  let requiredMatches = t.length;
  const runningFrequency = new Array(128).fill(0);

  for (let end = 0; end < s.length; end += 1) {
    //  1: Update the running frequency
    const currentChar = s[end].charCodeAt(0);
    runningFrequency[currentChar] += 1;

    //  2: If the character is a part of match, update it
    if (runningFrequency[currentChar] <= frequency[currentChar]) {
      totalMatches += 1;
    }

    //  3: If matches completed, shrink the window greedily
    while (totalMatches === requiredMatches) {
      //  3.1: If window is smaller, update it
      const windowSize = end - start + 1;
      if (windowSize < minWindowSize) {
        minWindowSize = windowSize;
        output = s.substring(start, end + 1);
      }

      //  3.2: Shrink the window
      const startChar = s[start].charCodeAt(0);
      runningFrequency[startChar] -= 1;

      if (runningFrequency[startChar] < frequency[startChar]) {
        totalMatches -= 1;
      }

      start += 1;
    }
  }

  return output;
}
