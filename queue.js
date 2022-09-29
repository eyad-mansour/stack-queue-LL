'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(val) {
    this.storage.push(val);
  }

  dequeue() {
    let dequeuePrint = this.storage.shift();
    console.log(dequeuePrint);
    return dequeuePrint;
  }

  peek() {
    return this.storage[0];
  }
}

class QueueLL {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.rear === null) {
      this.front = this.rear = node;
      return node;
    } else {
      const newNode = this.front;

      return node;
    }
  }
}

module.exports = QueueLL;
