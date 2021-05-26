"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var _require = require('./LinkedListNode.js'),
    Node = _require.LinkedListNode;

var _require2 = require('../helpers/Comparator.js'),
    Comparator = _require2.Comparator;

console.log(Node);

var LinkedList = /*#__PURE__*/function () {
  function LinkedList(comparatorFunction) {
    _classCallCheck(this, LinkedList);

    /* @LinkedListNode */
    this.head = null;
    /* @LinkedListNode */

    this.tail = null;
    /* @Comparator */

    this.compare = Comparator.make(comparatorFunction);
  }

  _createClass(LinkedList, [{
    key: "prepend",
    value: function prepend(value) {
      var node = Node.make(value, this.head);
      this.head = node; // If there is no tail yet let's make new node a tail.

      if (!this.tail) this.tail = node;
      return this;
    }
  }, {
    key: "append",
    value: function append(value) {
      var node = Node.make(value); // If there is no head yet let's make new node a head.

      if (!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      } // Attach new node to the end of linked list.


      this.tail.next = node;
      this.tail = node;
      return this;
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      if (!this.head) return null;
      var deletedNode = null; // If the head must be deleted then make next node that is different
      // from the head to be a new head.

      while (this.head && this.compare.equal(this.head.value, value)) {
        deletedNode = this.head;
        this.head = this.head.next;
      }

      var currentNode = this.head;

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
      } // Check if tail must be deleted.


      if (this.compare.equal(this.tail.value, value)) {
        this.tail = currentNode;
      }

      return deletedNode;
    }
  }, {
    key: "find",
    value: function find(_ref) {
      var _ref$value = _ref.value,
          value = _ref$value === void 0 ? undefined : _ref$value,
          _ref$callback = _ref.callback,
          callback = _ref$callback === void 0 ? undefined : _ref$callback;

      if (!this.head) {
        return null;
      }

      var currentNode = this.head;

      while (currentNode) {
        // If callback is specified then try to find node by callback.
        if (callback && callback(currentNode.value)) {
          return currentNode;
        } // If value is specified then try to compare by value..


        if (value !== undefined && this.compare.equal(currentNode.value, value)) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }
  }, {
    key: "deleteTail",
    value: function deleteTail() {
      var deletedTail = this.tail;

      if (this.head === this.tail) {
        // There is only one node in linked list.
        this.head = null;
        this.tail = null;
        return deletedTail;
      } // If there are many nodes in linked list...
      // Rewind to the last node and delete "next" link for the node before the last one.


      var currentNode = this.head;

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
  }, {
    key: "deleteHead",
    value: function deleteHead() {
      if (!this.head) {
        return null;
      }

      var deletedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }

      return deletedHead;
    }
  }, {
    key: "fromArray",
    value: function fromArray(values) {
      var _this = this;

      values.forEach(function (value) {
        return _this.append(value);
      });
      return this;
    }
    /**
     * @return {LinkedListNode[]}
     */

  }, {
    key: "toArray",
    value: function toArray() {
      var nodes = [];
      var currentNode = this.head;

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

  }, {
    key: "toString",
    value: function toString(callback) {
      return this.toArray().map(function (node) {
        return node.toString(callback);
      }).toString();
    }
    /**
     * Reverse a linked list.
     * @returns {LinkedList}
     */

  }, {
    key: "reverse",
    value: function reverse() {
      var currNode = this.head;
      var prevNode = null;
      var nextNode = null;

      while (currNode) {
        // Store next node.
        nextNode = currNode.next; // Change next node of the current node so it would link to previous node.

        currNode.next = prevNode; // Move prevNode and currNode nodes one step forward.

        prevNode = currNode;
        currNode = nextNode;
      } // Reset head and tail.


      this.tail = this.head;
      this.head = prevNode;
      return this;
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

  return LinkedList;
}();

module.exports = {
  LinkedList: LinkedList
};