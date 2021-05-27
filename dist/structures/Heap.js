"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*------------------------------------------------------------------------------------
 |   Heap
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
 |     -> find
 |        @param {*} item
 |        @param {Comparator} [comparator]
 |        @return {Number[]}
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
var Comparator = require('@Helper/Comparator.js');

var Heap = /*#__PURE__*/function () {
  function Heap(comparatorFunction) {
    _classCallCheck(this, Heap);

    if ((this instanceof Heap ? this.constructor : void 0) === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    } // Array representation of the heap.


    this.heapContainer = [];
    this.compare = Comparator.make(comparatorFunction);
  }

  _createClass(Heap, [{
    key: "getLeftChildIndex",
    value: function getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }
  }, {
    key: "getRightChildIndex",
    value: function getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }
  }, {
    key: "getParentIndex",
    value: function getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  }, {
    key: "hasParent",
    value: function hasParent(childIndex) {
      return this.getParentIndex(childIndex) >= 0;
    }
  }, {
    key: "hasLeftChild",
    value: function hasLeftChild(parentIndex) {
      return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }
  }, {
    key: "hasRightChild",
    value: function hasRightChild(parentIndex) {
      return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }
  }, {
    key: "leftChild",
    value: function leftChild(parentIndex) {
      return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }
  }, {
    key: "rightChild",
    value: function rightChild(parentIndex) {
      return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }
  }, {
    key: "parent",
    value: function parent(childIndex) {
      return this.heapContainer[this.getParentIndex(childIndex)];
    }
  }, {
    key: "swap",
    value: function swap(indexOne, indexTwo) {
      var tmp = this.heapContainer[indexTwo];
      this.heapContainer[indexTwo] = this.heapContainer[indexOne];
      this.heapContainer[indexOne] = tmp;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.heapContainer.length === 0) return null;
      return this.heapContainer[0];
    }
  }, {
    key: "poll",
    value: function poll() {
      if (this.heapContainer.length === 0) return null;
      if (this.heapContainer.length === 1) return this.heapContainer.pop();
      var item = this.heapContainer[0]; // Move the last element from the end to the head.

      this.heapContainer[0] = this.heapContainer.pop();
      this.heapifyDown();
      return item;
    }
  }, {
    key: "add",
    value: function add(item) {
      this.heapContainer.push(item);
      this.heapifyUp();
      return this;
    }
  }, {
    key: "remove",
    value: function remove(item) {
      var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.compare;
      // Find number of items to remove.
      var numberOfItemsToRemove = this.find(item, comparator).length;

      for (var iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
        // We need to find item index to remove each time after removal since
        // indices are being changed after each heapify process.
        var indexToRemove = this.find(item, comparator).pop(); // If we need to remove last child in the heap then just remove it.
        // There is no need to heapify the heap afterwards.

        if (indexToRemove === this.heapContainer.length - 1) {
          this.heapContainer.pop();
        } else {
          // Move last element in heap to the vacant (removed) position.
          this.heapContainer[indexToRemove] = this.heapContainer.pop(); // Get parent.

          var parentItem = this.parent(indexToRemove); // If there is no parent or parent is in correct order with the node
          // we're going to delete then heapify down. Otherwise heapify up.

          if (this.hasLeftChild(indexToRemove) && (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))) {
            this.heapifyDown(indexToRemove);
          } else {
            this.heapifyUp(indexToRemove);
          }
        }
      }

      return this;
    }
  }, {
    key: "find",
    value: function find(item) {
      var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.compare;
      var foundItemIndices = [];

      for (var itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
        if (comparator.equal(item, this.heapContainer[itemIndex])) {
          foundItemIndices.push(itemIndex);
        }
      }

      return foundItemIndices;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.heapContainer.length;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.heapContainer.toString();
    }
  }, {
    key: "heapifyUp",
    value: function heapifyUp(customStartIndex) {
      // Take the last element (last in array or the bottom left in a tree)
      // in the heap container and lift it up until it is in the correct
      // order with respect to its parent element.
      var currentIndex = customStartIndex || this.heapContainer.length - 1;

      while (this.hasParent(currentIndex) && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }
  }, {
    key: "heapifyDown",
    value: function heapifyDown() {
      var customStartIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      // Compare the parent element to its children and swap parent with the appropriate
      // child (smallest child for MinHeap, largest child for MaxHeap).
      // Do the same for next children after swap.
      var currentIndex = customStartIndex;
      var nextIndex = null;

      while (this.hasLeftChild(currentIndex)) {
        if (this.hasRightChild(currentIndex) && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }

        if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
          break;
        }

        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }
  }, {
    key: "pairIsInCorrectOrder",
    value: function pairIsInCorrectOrder(firstElement, secondElement) {
      throw new Error("\n      You have to implement heap pair comparision method\n      for ".concat(firstElement, " and ").concat(secondElement, " values.\n    "));
    }
  }], [{
    key: "make",
    value: function make() {
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }

      return _construct(this, parameters);
    }
  }]);

  return Heap;
}();

module.exports = Heap;