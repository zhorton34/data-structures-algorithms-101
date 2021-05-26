"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT = {
  min: 0,
  max: 1000000
};

var Factory = /*#__PURE__*/function () {
  function Factory() {
    _classCallCheck(this, Factory);
  }

  _createClass(Factory, null, [{
    key: "DummyArray",
    value: function DummyArray() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT.min;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT.max;
      var dummy = new Array(Factory.DummyInteger(min, max)).fill(0);
      return dummy.map(Factory.DummyInteger);
    }
  }, {
    key: "DummyInteger",
    value: function DummyInteger() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT.min;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT.max;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }]);

  return Factory;
}();

module.exports = {
  Factory: Factory
};