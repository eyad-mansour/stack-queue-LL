'use strict';

const StackLL = require('../stack');

describe('testing the stack class', () => {
  it('testing creating', () => {
    const newStack = new StackLL();
    expect(newStack).toBeInstanceOf(StackLL);
    // expect(newStack instanceof Stack).toBeTruthy();
  });
});

describe('testing add to stack', () => {
  it('testing inserting to the stack', () => {
    const newStack = new StackLL();
    newStack.insert(1);
    expect(newStack.top.value).toEqual(1);
    newStack.insert(2);
    expect(newStack.top.value).toEqual(2);
    newStack.insert(3);
    expect(newStack.top.value).toEqual(3);
  });
});
describe('testing the pop from the stack', () => {
  it('testing pop and peek', () => {
    const newStack = new StackLL();
    newStack.insert(3);
    newStack.pop();
    expect(newStack.top.next).toBeNull();
    newStack.insert(6);
    newStack.insert(2);
    newStack.pop();
    expect(newStack.top.value).toEqual(2);
  });
});

describe('testing the peek from the stack', () => {
  it('testing peek', () => {
    const newStack = new StackLL();
    newStack.insert(1);
    expect(newStack.peek()).toEqual(1);
    newStack.insert(2);
    newStack.insert(3);
    expect(newStack.peek()).toEqual(3);
  });
});
