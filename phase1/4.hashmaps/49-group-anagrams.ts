function groupAnagrams(strs: string[]): string[][] {
  const solution = new Map<string, string[]>();

  for (const str of strs) {
    const key = generateKey(str);
    if (!solution.has(key)) {
      solution.set(key, []);
    }

    solution.get(key)!.push(str);
  }

  return Array.from(solution.values());
}

const generateKey = (str: string): string => {
  const key = Array(26).fill(0);

  for (const char of str) {
    key[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  return key.join("x");
};
