"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*--------------------------------------------------------------
 |  Min Heap
 *--------------------------------------------------------------
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
var Heap = require('@DataStructure/Heap.js');

var MinHeap = /*#__PURE__*/function (_Heap) {
  _inherits(MinHeap, _Heap);

  var _super = _createSuper(MinHeap);

  function MinHeap() {
    _classCallCheck(this, MinHeap);

    return _super.apply(this, arguments);
  }

  _createClass(MinHeap, [{
    key: "pairIsInCorrectOrder",
    value: function pairIsInCorrectOrder(firstElement, secondElement) {
      return this.compare.lessThanOrEqual(firstElement, secondElement);
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

  return MinHeap;
}(Heap);

module.exports = MinHeap;