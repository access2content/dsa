function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  //  1: Create frequency count of s
  const sCount = new Map();
  for (const char of s) {
    sCount.set(char, (sCount.get(char) || 0) + 1);
  }

  //  2: Create frequency count of t
  const tCount = new Map();
  for (const char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }

  //  3: Compare both Hash maps
  const keys = sCount.keys();
  for (const key of keys) {
    if (sCount.get(key) !== tCount.get(key)) {
      return false;
    }
  }

  return true;
}
