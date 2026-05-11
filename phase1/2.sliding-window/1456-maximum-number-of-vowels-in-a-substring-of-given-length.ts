function maxVowels(s: string, k: number): number {
  //  1: Initialize the window
  let vowelCount = 0;
  for (let i = 0; i < k; i += 1) {
    if (["a", "e", "i", "o", "u"].includes(s[i])) {
      vowelCount += 1;
    }
  }
  let maxVowelCount = vowelCount;

  for (let start = 0, end = k; end < s.length; end += 1, start += 1) {
    //  If window start is a vowel, reduce the count
    if (["a", "e", "i", "o", "u"].includes(s[start])) {
      vowelCount -= 1;
    }

    //  If current char is vowel, increase the vowel count
    if (["a", "e", "i", "o", "u"].includes(s[end])) {
      vowelCount += 1;
    }

    maxVowelCount = Math.max(maxVowelCount, vowelCount);
  }

  return maxVowelCount;
}
