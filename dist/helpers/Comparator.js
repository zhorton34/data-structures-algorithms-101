"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*----------------------------------------------------------
 |   Comparator
 *----------------------------------------------------------
 |
 |   Api
 |   -> defaultCompareFunction
 |      @param {(string|number)} a
 |      @param {(string|number)} b
 |      @returns {number}
 |   -> equal
 |      @param {*} a
 |      @param {*} b
 |      @return {boolean}
 |   -> lessThan
 |      @param {*} a
 |      @param {*} b
 |      @return {boolean}
 |   -> greaterThan
 |      @params {*} a
 |      @params {*} b 
 |      @returns {boolean}
 |   -> lessThanOrEqual
 |      @params {*} a
 |      @params {*} b
 |      @returns {boolean}
 |   -> greaterThanOrEqual
 |      @params {*} a
 |      @params {*} b
 |      @returns {boolean}
 |   -> reverse ("reverse comparison order")
 |
 */
var Comparator = /*#__PURE__*/function () {
  function Comparator(compareFunction) {
    _classCallCheck(this, Comparator);

    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  _createClass(Comparator, [{
    key: "equal",
    value: function equal(a, b) {
      return this.compare(a, b) === 0;
    }
  }, {
    key: "lessThan",
    value: function lessThan(a, b) {
      return this.compare(a, b) < 0;
    }
  }, {
    key: "greaterThan",
    value: function greaterThan(a, b) {
      return this.compare(a, b) > 0;
    }
  }, {
    key: "lessThanOrEqual",
    value: function lessThanOrEqual(a, b) {
      return this.lessThan(a, b) || this.equal(a, b);
    }
  }, {
    key: "greaterThanOrEqual",
    value: function greaterThanOrEqual(a, b) {
      return this.greaterThan(a, b) || this.equal(a, b);
    }
  }, {
    key: "reverse",
    value: function reverse() {
      var compareOriginal = this.compare;

      this.compare = function (a, b) {
        return compareOriginal(b, a);
      };
    }
  }], [{
    key: "make",
    value: function make() {
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }

      return _construct(this, parameters);
    }
  }, {
    key: "defaultCompareFunction",
    value: function defaultCompareFunction(a, b) {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    }
  }]);

  return Comparator;
}();

module.exports = Comparator;