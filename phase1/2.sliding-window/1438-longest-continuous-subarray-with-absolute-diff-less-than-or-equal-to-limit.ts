function longestSubarray(nums: number[], limit: number): number {
  let longest = 0;
  let start = 0;

  const maxDequeue: number[] = [];
  let maxStart = 0;
  const minDequeue: number[] = [];
  let minStart = 0;

  for (let end = 0; end < nums.length; end += 1) {
    //  1: Insert element in the max dequeue
    while (
      maxStart < maxDequeue.length &&
      nums[end] >= nums[maxDequeue[maxDequeue.length - 1]]
    ) {
      maxDequeue.pop();
    }
    maxDequeue.push(end);

    //  2: Insert element in the min dequeue
    while (
      minStart < minDequeue.length &&
      nums[end] <= nums[minDequeue[minDequeue.length - 1]]
    ) {
      minDequeue.pop();
    }
    minDequeue.push(end);

    let max = nums[maxDequeue[maxStart]];
    let min = nums[minDequeue[minStart]];

    //  3: Shrink the window
    while (max - min > limit) {
      start += 1;

      //  4: Remove all expired elements from max dequeue
      while (maxStart < maxDequeue.length && maxDequeue[maxStart] < start) {
        maxStart += 1;
      }
      max = nums[maxDequeue[maxStart]];

      //  5: Remove all expired elements from min dequeue
      while (minStart < minDequeue.length && minDequeue[minStart] < start) {
        minStart += 1;
      }
      min = nums[minDequeue[minStart]];
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}
