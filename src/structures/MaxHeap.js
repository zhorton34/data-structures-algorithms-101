/*------------------------------------------------------------------------------------
 |   Max Heap
 *------------------------------------------------------------------------------------
 |
 |   . Api
 |     -> getLeftChild
 |        @param {number} parentIndex
 |        @return {number}
 |     -> getRightChild
 |        @param {number} parentIndex
 |        @return {number}
 |     -> getParentIndex
 |        @param {number} childIndex
 |        @return {number}
 |     -> hasParent
 |        @param {number} childIndex
 |        @return {boolean}
 |     -> hasRightChild
 |        @param {number} parentIndex
 |        @return {boolean}
 |     -> hasLeftChild
 |        @param {number} parentIndex
 |        @return {boolean}
 |     -> leftChild
 |        @param {number} parentIndex
 |        @return {*}
 |     -> rightChild
 |        @param {number} parentIndex
 |        @return {*}  
 |     -> parent
 |        @param {number} childIndex
 |        @return {*}
 |     -> swap
 |        @param {number} indexOne
 |        @param {number} indexTwo
 |     -> peek
 |        @return {*}
 |     -> poll
 |        @return {*}
 |     -> add
 |        @param {*} item
 |        @return {Heap}
 |     -> remove
 |        @param {*} item
 |        @param {Comparator} [comparator]
 |        @return {Heap}
 |     -> isEmpty
 |        @return {boolean}
 |     -> toString
 |        @return {string}
 |     -> heapifyUp
 |        @param {number} [customStartIndex]
 |     -> heapifyDown
 |        @param {number} [customStartIndex]
 |     -> pairIsInCorrectOrder
 |        @param {*} firstElement
 |        @param {*} secondElement
 |        @return {boolean}
 |
 */

const Heap = require('@DataStructure/Heap.js')

class MaxHeap extends Heap
{
	static make(...parameters)
	{
		return new this(...parameters)
	}

  pairIsInCorrectOrder(firstElement, secondElement) 
  {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }	
}

module.exports = MaxHeap
