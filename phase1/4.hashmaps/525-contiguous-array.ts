function findMaxLength(nums: number[]): number {
  const diffMap = new Map<number, number>();
  diffMap.set(0, -1);

  let maxLength = 0;
  let diff = 0;

  for (const [index, num] of nums.entries()) {
    diff += num === 0 ? -1 : 1;

    if (!diffMap.has(diff)) {
      diffMap.set(diff, index);
    } else {
      maxLength = Math.max(maxLength, index - diffMap.get(diff)!);
    }
  }

  return maxLength;
}
