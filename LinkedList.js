class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const nll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    nll.insertAtHead(values[i]);
  }
  return nll;
};

module.exports = LinkedList;