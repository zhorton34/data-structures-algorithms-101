"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*--------------------------------------------------------
 |   Radix Sort
 *--------------------------------------------------------
 |
 |   . Time Complexity
 |     -> Best: Ω(n log(n))	
 |     -> Avrg: Θ(n(log(n))^2)	
 |     -> Worst: O(n(log(n))^2)	
 |
 |   . Space Complexity
 |     -> O(1)
 |
 |
 |   . Notes
 |     -> It is a generalized version of insertion sort.
 |     -> Sorts the elements far apart from each other and successively reduces the interval between the elements to be sorted.
 |     -> In shell sort, elements at a specific interval are sorted.
 */
var getMax = function getMax(items) {
  // O(n)
  var max = 0;

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var num = _step.value;
      max = max < num.toString().length ? num.toString().length : max;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return max;
};

var RadixSort = function RadixSort(items) {
  // O(nk)
  var max = getMax(items);

  for (var i = 0; i < max; i++) {
    var _ref;

    var buckets = Array.from({
      length: 10
    }, function () {
      return [];
    });

    for (var j = 0; j < items.length; j++) {
      buckets[getPosition(items[j], i)].push(items[j]);
    }

    items = (_ref = []).concat.apply(_ref, _toConsumableArray(buckets));
  }

  return items;
};

module.exports = RadixSort;