/*--------------------------------------------------------
 |   Queue
 *--------------------------------------------------------
 |
 |   . Api
 |     -> isEmpty
 |        @return {boolean}
 |     -> peek (Read the element at the front of the queue without removing it)
 |        @return {*}
 |     -> enqueue (Add a new element to the end of the queue - the tail of the linked list)
 |        @param {*} data
 |     -> dequeue 
 |        @return {*}
 |     -> toString
 |        @param [callback]
 |        @return {string}
 |
 */

const LinkedList = require('@DataStructure/LinkedList.js')

class Queue 
{
  static make(...parameters)
  {
    return new this(...parameters)
  }

  constructor() 
  {
    this.linkedList = LinkedList.make()
  }

  isEmpty() 
  {
    return !this.linkedList.head
  }

  peek() 
  {
    if (!this.linkedList.head) return null

    return this.linkedList.head.data
  }

  enqueue(data) 
  {
    this.linkedList.append(data)
  }

  dequeue() 
  {
    const removedHead = this.linkedList.deleteHead()
    return removedHead ? removedHead.data : null
  }

  toString(callback) 
  {
    return this.linkedList.toString(callback)
  }
}

module.exports = Queue