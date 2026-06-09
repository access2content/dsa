function topKFrequent(nums: number[], k: number): number[] {
  //  1: Set the frequency count
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  return Array.from(freqMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([data]) => data);
}
