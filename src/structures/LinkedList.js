/*--------------------------------------------------------
 |   Linked List
 *--------------------------------------------------------
 |
 |   . Time Complexity
 |     -> Access: O(n)
 |     -> Search: O(n)
 |     -> Insert: O(1)
 |     -> Delete: O(1)
 |  
 |   . Space Complexity
 |     -> O(n)
 |
 |   . Api
 |     -> prepend
 |        @param{*} value
 |        @return {LinkedList}
 |     -> append
 |        @param {*} value
 |        @return {LinkedList}
 |     -> delete
 |        @param (*) value
 |        @return {LinkedListNode}
 |     -> find
 |        @param {Object} findParams
 |        @param {*} findParams.value
 |        @param {function} [findParams.callback]
 |        @return {LinkedListNode}
 |     -> deleteTail
 |        @return {LinkedListNode}
 |     -> deleteHead
 |        @return {LinkedListNode}
 |     -> fromArray
 |        @param {*[]} values - Array of values that need to be converted to linked list.
 |        @return {LinkedList}
 |     -> toArray
 |        @return {LinkedListNode[]}
 |     -> toString
 |        @param {function} callback
 |        @return {string}
 |     -> reverse
 |        Reverse a linked list
 |        @returns {LinkedList}
 |        
 */
 
 

let { LinkedListNode: Node } = require('./LinkedListNode.js')
let { Comparator } = require('../helpers/Comparator.js')
console.log(Node)

 class LinkedList
 {
 		static make(...parameters)
 		{
 			return new this(...parameters)
 		}

	 	constructor (comparatorFunction)
 		{
 			/* @LinkedListNode */
 			this.head = null
 			/* @LinkedListNode */
 			this.tail = null
 			/* @Comparator */
 			this.compare = Comparator.make(comparatorFunction)
 		}

  prepend(value) 
  {
  	const node = Node.make(value, this.head)
    this.head = node

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) this.tail = node

    return this;
  }

  append(value) 
  {
  	const node = Node.make(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = node
      this.tail = node

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = node
    this.tail = node

    return this
  }

  delete(value) 
  {
    if (!this.head) return null

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find({ value = undefined, callback = undefined }) 
  {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() 
  {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() 
  {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  fromArray(values) 
  {
    values.forEach((value) => this.append(value));

    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() 
  {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) 
  {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() 
  {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
 }


 module.exports = { LinkedList }