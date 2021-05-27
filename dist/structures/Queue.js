"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.first = {
      value: null,
      next: null
    };
    this.last = this.first;
    this.length = 0;
  }

  _createClass(Queue, [{
    key: "peek",
    value: function peek() {
      return this.first;
    }
  }, {
    key: "enqueue",
    value: function enqueue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (this.isEmpty()) {
        this.first = {
          value: value,
          next: null
        };
        this.last = this.first;
      } else if (this.length === 1) {
        this.last = {
          value: value,
          next: null
        };
        this.first.next = this.last;
      } else if (this.length > 1) {
        this.last.next = {
          value: value,
          next: null
        };
        this.last = this.last.next;
      }

      this.length++;
      return this.isNotEmpty();
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var first = this.first;
      this.length = this.length > 0 ? this.length-- : this.length;
      this.first = this.first.next ? this.first.next : {
        value: null,
        next: null
      };
      this.last = this.isEmpty() ? this.first : this.last;
      return this.isEmpty() || this.first !== first;
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty() {
      return this.isEmpty() === false;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.length === 0;
    }
  }, {
    key: "traverse",
    value: function traverse() {
      while (this.isNotEmpty()) {
        console.log(this.peek());
        this.dequeue();
      }
    }
  }], [{
    key: "make",
    value: function make() {
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }

      return _construct(Queue, parameters);
    }
  }]);

  return Queue;
}();

module.exports = Queue;