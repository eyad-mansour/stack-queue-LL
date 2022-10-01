'use strict';

const QueueLL = require('../queue');

describe('testing Queue class', () => {
  it('test creating new instance', () => {
    const newQueue = new QueueLL();
    expect(newQueue).toBeInstanceOf(QueueLL);
  });
});

describe('test for the add to the QueueLL', () => {
  it('testing the enqueue method', () => {
    const newQueue = new QueueLL();
    newQueue.enqueue(3);
    expect(newQueue.rear.value).toEqual(3);
    newQueue.enqueue(200);
    expect(newQueue.rear.value).toEqual(200);
    newQueue.enqueue(2);
    expect(newQueue.rear.value).toEqual(2);
  });
});

describe('testing deletion from the QueueLL', () => {
  it('testing the dequeue', () => {
    const newQueueLL = new QueueLL();
    newQueueLL.enqueue(3);
    newQueueLL.dequeue();
    expect(newQueueLL.front).toBeNull();
    newQueueLL.enqueue(6);
    newQueueLL.enqueue(2);
    newQueueLL.dequeue();
    expect(newQueueLL.front.value).toEqual(2);
  });
});

describe('test the front of the Queue', () => {
  it('testing the peek method on empty Queue', () => {
    const newQueueLL = new QueueLL();
    newQueueLL.enqueue(3);
    expect(newQueueLL.peek()).toEqual(3);
  });
  it('testing the peek method on Queue with node already added', () => {
    const newQueueLL = new QueueLL();
    newQueueLL.enqueue(3);
    newQueueLL.enqueue(100);
    newQueueLL.enqueue(200);
    expect(newQueueLL.peek()).toEqual(200);
  });
});

describe('tesitng the is Empty method', () => {
  it('testing is Empty on empty Queue', () => {
    const newQueueLL = new QueueLL();
    newQueueLL.enqueue(300);
    newQueueLL.dequeue();
    expect(newQueueLL.isEmpty()).toBeTruthy();
  });
  it('testing is Empty on not empty Queue', () => {
    const newQueueLL = new QueueLL();
    newQueueLL.enqueue(300);
    newQueueLL.enqueue(300);
    newQueueLL.enqueue(300);
    newQueueLL.dequeue();
    newQueueLL.dequeue();
    newQueueLL.dequeue();
    expect(newQueueLL.isEmpty()).toBeTruthy();
  });
});
