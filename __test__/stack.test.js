"use strict";

const Stack = require("../stack");

describe("testing the stack class", () => {
  it("testing creating", () => {
    const newStack = new Stack();
    expect(newStack).toBeInstanceOf(Stack);
    // expect(newStack instanceof Stack).toBeTruthy();
  });
});

describe("testing add to stack", () => {
  it("testing inserting to the stack", () => {
    const newStack = new Stack();
    newStack.pushItem(1);
    expect(newStack.top).toEqual(1);
    newStack.pushItem(2);
    expect(newStack.top).toEqual(2);
    newStack.pushItem(3);
    expect(newStack.top).toEqual(3);
  });
});
describe("testing the pop from the stack", () => {
  it("testing pop and peek", () => {
    const newStack = new Stack();
    newStack.pushItem(1);
    newStack.pushItem(2);
    newStack.pushItem(3);

    expect(newStack.popItem()).toEqual(3);
    expect(newStack.popItem()).toEqual(2);
    expect(newStack.popItem()).toEqual(1);
  });
});

describe("testing the peek from the stack", () => {
  it("testing and peek", () => {
    const newStack = new Stack();
    newStack.pushItem(1);
    newStack.pushItem(2);
    newStack.pushItem(3);

    expect(newStack.peek()).toEqual(3);
    expect(newStack.popItem()).toEqual(3);
    expect(newStack.peek()).toEqual(2);
    expect(newStack.popItem()).toEqual(2);
    expect(newStack.peek()).toEqual(1);
    expect(newStack.popItem()).toEqual(1);
  });
});
