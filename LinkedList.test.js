const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const nll = new LinkedList();
    nll.insertAtHead(10);
    const oldHead = nll.head;
    nll.insertAtHead(20);

    expect(nll.head.value).toBe(20);
    expect(nll.head.next).toBe(oldHead);
    expect(nll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const nll = LinkedList.fromValues(10, 20);

      expect(nll.getByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("it returns null", () => {
      const nll = LinkedList.fromValues(10, 20);

      expect(nll.getByIndex(5)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("it returns the head");
  });
});
