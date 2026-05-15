function maxSlidingWindow(nums: number[], k: number): number[] {
  const output: number[] = [];
  const dequeue: number[] = [];
  let front = 0;

  for (let i = 0; i < nums.length; i += 1) {
    //  1: Push the element by removing all smaller elements
    while (
      dequeue.length > front &&
      nums[i] >= nums[dequeue[dequeue.length - 1]]
    ) {
      dequeue.pop();
    }
    dequeue.push(i);

    //  2: Remove all expired indices from the front
    while (front < dequeue.length && dequeue[front] <= i - k) {
      front += 1;
    }

    //  3: Store the highest value in output
    if (i >= k - 1) {
      output.push(nums[dequeue[front]]);
    }
  }

  return output;
}
