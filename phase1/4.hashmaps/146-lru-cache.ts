class LRUCache {
  cache = new Map<number, number>();
  capacity: number;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("Invalid capacity");
    }

    this.capacity = capacity;
  }

  put(key: number, value: number): void {
    //  1: Remove existing key to bring it to the last
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    //  2: If at capacity, delete the least recently
    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key)!;
    this.put(key, value);
    return value;
  }
}
