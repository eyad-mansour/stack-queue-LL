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

  enqueue(val) {
    const node = new Node(val);
    if (this.rear === null && this.front === null) {
      this.front = this.rear = node;
      return node;
    } else {
      this.rear.next = node;
      this.rear = node;
      return node;
    }
  }

  dequeue() {
    if (this.front === null) {
      return 'The queue is already empty';
    }
    let prev = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return prev;
  }

  peek() {
    if (this.rear) {
      return this.rear.value;
    } else {
      return 'Queue is empty';
    }
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

module.exports = QueueLL;
