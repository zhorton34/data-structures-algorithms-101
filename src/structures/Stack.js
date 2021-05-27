/*--------------------------------------------------------
 |   Stack
 *--------------------------------------------------------
 |
 |   . Api
 |     -> isEmpty
 |        @return {boolean}
 |     -> peek
 |        @return {*}
 |     -> push
 |        @param {*} value
 |     -> pop
 |        @return {*}
 |     -> toArray
 |        @return {*[]}
 |     -> toString
 |        @param {function} [callback]
 |        @return {string}
 |
 */

const LinkedList = require('@DataStructure/LinkedList.js')

class Stack
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
    if (this.isEmpty()) return null

    return this.linkedList.head.data
  }

  push(data)
  {
    this.linkedList.prepend(data)
  }

  pop()
  {
    const removeHead = this.linkedList.deleteHead()

    return removedHead ? removedHead.data : null
  }

  toArray()
  {
    return this.linkedList.toArray().map(node => node.data)
  }

  toString(callback)
  {
    return this.linkedList.toString(callback)
  }
}

module.exports = Stack