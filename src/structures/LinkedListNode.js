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

class LinkedListNode 
{
    static make(...parameters) 
  {
    return new this(...parameters)
  }
  
  constructor(data, next = null) 
  {
    this.data = data;
    this.next = next;
  }

  toString(callback) 
  {
    return callback ? callback(this.data) : `${this.data}`;
  }
}


module.exports = { LinkedListNode }