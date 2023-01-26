//sudo code for linked list

//imagine the first node is an object literal
const n1 = {
  data: 100,
};
//same for the second node
const n2 = {
  data: 200,
};

n1.next = n2;
//run the console.log down below to see your linked list
// console.log(n1);

//Now let's build some classes

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //set head to null by default because there is no head if the list is empty
    this.head = null;
    //keep track of the size of list
    this.size = 0;
  }
  //create your methods your LinkedList

  //insert first node
  insertFirst(data) {
    //we put this.head as an argument is because if we already have a head node, then this method will push the head next
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      //if there is already a head
      current = this.head;

      while (current.next) {
        //this will allow us to traverse through the list
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    //cover your edge cases
    //what happens if we put an index that doesn't exist?
    //if index is out of range, return nothing;
    if (index > 0 && index > this.size) {
      return;
    }
    //take care if its the zero index, the head
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // node before index we want to insert
      count++;
      current = current.next; //making room for our new node ( node after index )
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next; //will be a never ending loop unless we do this
    }

    return null;
  }

  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      //we need to move along the nodes
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);
// ll.insertAt(500, 1);
// ll.removeAt(2);

// console.log(ll);
ll.printListData();
// ll.getAt(2);
