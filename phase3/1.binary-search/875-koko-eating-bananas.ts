function minEatingSpeed(piles: number[], h: number): number {
  //  1: Find the largest number
  let end = piles[0];
  for (const pile of piles) {
    if (pile > end) {
      end = pile;
    }
  }

  let start = 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    const timeTaken = getTime(piles, mid);

    if (timeTaken <= h) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

const getTime = (piles: number[], speed: number): number => {
  return piles.reduce((acc, current) => acc + Math.ceil(current / speed), 0);
};
