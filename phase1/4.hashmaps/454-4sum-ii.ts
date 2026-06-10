function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let total = 0;

  //  1: Generate the 2sum map for nums1 and nums2
  const sumMap = new Map<number, number>();
  for (let i = 0; i < nums1.length; i += 1) {
    for (let j = 0; j < nums2.length; j += 1) {
      const sum = nums1[i] + nums2[j];
      sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }
  }

  for (let i = 0; i < nums3.length; i += 1) {
    for (let j = 0; j < nums4.length; j += 1) {
      const sum = nums3[i] + nums4[j];
      if (sumMap.has(-sum)) {
        total += sumMap.get(-sum)!;
      }
    }
  }

  return total;
}
