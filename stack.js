'use strict';

const Node = require('./node');

class StackLL {
  constructor() {
    this.top = null;
  }

  insert(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let prevNode = this.top;
    this.top.next = this.top;
    prevNode.next = null;
    // let prevNodell = this.top.next;
    // this.top.next = null;
    // this.top = prevNodell
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return 'stack is empty';
    }
  }

  isEmpty() {
    return this.top ? false : true;
  }
}
module.exports = StackLL;

class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }
  peek() {
    return this.top;
  }

  pushItem(item) {
    this.storage.push(item);
    this.top = item;
  }

  popItem() {
    let poppedItem = this.storage.pop();
    this.top = this.storage[this.storage.length - 1];
    return poppedItem;
  }
}

// module.exports = Stack;
