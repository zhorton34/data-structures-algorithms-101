/*--------------------------------------------------
 |   Linked List Node
 *--------------------------------------------------
 |
 |   . data
 |     -> node data
 |   . next
 |     -> node pointer to next node in linked list or null
 |
 */

class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.data) : `${this.data}`;
  }

  static make(...parameters) 
  {
  	return new this(...parameters)
  }
}


module.exports = { LinkedListNode }