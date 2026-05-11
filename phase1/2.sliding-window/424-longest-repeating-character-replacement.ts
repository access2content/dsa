function characterReplacement(s: string, k: number): number {
  let start = 0;
  let maxFrequency = 0;
  let maxLength = 0;
  let frequencyMap = new Map<string, number>();

  for (let end = 0; end < s.length; end += 1) {
    const char = s[end];
    //  1: Update the current window map count
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);

    //  2: Update the max frequency
    maxFrequency = Math.max(maxFrequency, frequencyMap.get(char) || 1);

    //  3: Repair window if needed
    while (end - start + 1 - maxFrequency > k) {
      frequencyMap.set(s[start], (frequencyMap.get(s[start]) || 1) - 1);
      start += 1;
    }

    //  4: Find the max length possible
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
