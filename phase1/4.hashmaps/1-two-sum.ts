function twoSum(nums: number[], target: number): number[] {
  const visited = new Map<number, number>();

  for (const [index, num] of nums.entries()) {
    if (visited.has(target - num)) {
      return [index, visited.get(target - num)!];
    }

    visited.set(num, index);
  }
}
