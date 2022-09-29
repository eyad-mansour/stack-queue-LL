'use strict';

const StackLL = require('./stack');
const QueueLL = require('./queue');

// const newStack = new Stack();
const newQueue = new QueueLL();

// linked list Stack and Queue
const newStackLL = new StackLL();

// Stack
// newStack.pushItem(1);
// newStack.pushItem(2);
// newStack.pushItem(3);
// newStack.pushItem(4);
// newStack.pushItem(5);
// console.log(newStack.peek());
// newStack.popItem();
// console.log(newStack.peek());
// console.log(newStack);

// queue
// newQueue.enqueue(1);
// newQueue.enqueue(2);
// newQueue.enqueue(3);
// newQueue.enqueue(4);
// newQueue.dequeue();
// console.log(newQueue);

console.log(newStackLL.isEmpty());
newStackLL.insert(3);
newStackLL.insert(2);
console.log(newStackLL.isEmpty());
newStackLL.insert(4);
newStackLL.insert(56);
console.log(newStackLL);

// queueLL
console.log(newQueue.enqueue(2));

console.log(newQueue.enqueue(3));
console.log(newQueue.enqueue(4));
console.log(newQueue.enqueue(5));
console.log(newQueue.enqueue(23));
