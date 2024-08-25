class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Can't pop from an empty stack.");
    }
    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;