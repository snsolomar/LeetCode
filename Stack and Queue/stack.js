class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  //Add element to top of stack
  push(element) {
    this.items[this.size] = element;
    // console.log(`${element} add to ${this.size}`);
    this.size++;
    return this.size - 1;
  }
  //Return and remove top element in stack
  //Return undefined if stack is empty
  pop() {
    if (this.size === 0) return undefined;
    let deleteItem = this.items[this.size - 1];
    this.size--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

// stack.pop();
// stack.pop();
