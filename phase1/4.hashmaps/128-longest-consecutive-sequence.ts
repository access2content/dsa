function longestConsecutive(nums: number[]): number {
  let longest = 0;

  //  1: Build a set
  const existingElements = new Set<number>(nums);

  for (const num of existingElements) {
    if (existingElements.has(num - 1)) {
      continue;
    }

    let currentLen = 1;
    while (existingElements.has(num + currentLen)) {
      currentLen += 1;
    }

    longest = Math.max(longest, currentLen);
  }

  return longest;
}

const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const input = [100, 4, 200, 1, 3, 2];
const output = longestConsecutive(input);

console.log(output);
