"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// https://opendatastructures.org/versions/edition-0.1c/ods-java/node36.html
// lookup
// insert
// delete
// access 
// depth
// count
// isEmpty
// isNotEmpty

/** 
 | has(value)
   insert(value)
   lookup(value)
 | delete(value) // TODO: fix this function
 | depthFirstLog (cllback)
*/
var BinarySearchTree = /*#__PURE__*/function () {
  function BinarySearchTree(value) {
    _classCallCheck(this, BinarySearchTree);

    this.value = value;
    this.left = undefined;
    this.right = undefined;
    return this;
  }

  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(value) {
      var node = new BinarySearchTree(value);

      var recurse = function recurse(bst) {
        if (bst.value > value && bst.left === undefined) {
          bst.left = node;
        } else if (bst.value > value) {
          recurse(bst.left);
        } else if (bst.value < value && bst.right === undefined) {
          bst.right = node;
        } else if (bst.value < value) {
          recurse(bst.right);
        }
      };

      recurse(this);
    }
  }, {
    key: "lookup",
    value: function lookup(value) {
      var resolved = -1;

      var recurse = function recurse(bst) {
        if (bst.value === value) {
          resolved = bst;
        } else if (bst.left !== undefined && value < bst.value) {
          recurse(bst.left);
        } else if (bst.right !== undefined && value > bst.value) {
          recurse(bst.right);
        }
      };

      recurse(this);
      return resolved;
    }
  }, {
    key: "has",
    value: function has(value) {
      var hasValue = false; //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.

      var recurse = function recurse(bst) {
        if (bst.value === value) {
          hasValue = true;
        } else if (bst.left !== undefined && value < bst.value) {
          recurse(bst.left);
        } else if (bst.right !== undefined && value > bst.value) {
          recurse(bst.right);
        }
      };

      recurse(this);
      return hasValue;
    }
  }, {
    key: "delete",
    value: function _delete(start) {
      var data = [];
      var queue = [];
      var node = start ? this.lookup(start) : this.root;
      queue.push(node);

      while (queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }, {
    key: "depthFirstLog",
    value: function depthFirstLog() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;

      var recurse = function recurse(bst) {
        callback.call(bst, bst.value);
        if (bst.left !== undefined) recurse(bst.left);
        if (bst.right !== undefined) recurse(bst.right);
      };

      recurse(this);
    }
  }]);

  return BinarySearchTree;
}();

module.exports = {
  tree: tree,
  BinarySearchTree: BinarySearchTree
};