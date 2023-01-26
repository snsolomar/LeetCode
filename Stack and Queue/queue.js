class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    this.queue.shift();
  }
  getSize() {
    return this.queue.length;
  }
}

const bankLine = new Queue();

bankLine.enqueue("simon");
bankLine.enqueue("martha");
bankLine.enqueue("laura");

console.log(bankLine);
