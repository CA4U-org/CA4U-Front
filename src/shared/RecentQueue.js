export class RecentQueue {
  constructor(maxSize, items = []) {
    this.maxSize = maxSize;
    this.queue = items;
  }

  push(item) {
    if (this.queue.length >= this.maxSize) {
      this.queue.shift();
    }
    this.queue.push(item);
  }

  get() {
    return this.queue;
  }

  clear() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  isFull() {
    return this.size() === this.maxSize;
  }

  isContain(item) {
    return this.queue.includes(item);
  }

  toJsonObject() {
    return {
      maxSize: this.maxSize,
      queue: this.queue,
    };
  }

  static fromJson(jsonRecentQueue) {
    return new RecentQueue(jsonRecentQueue.maxSize, jsonRecentQueue.queue);
  }
}
