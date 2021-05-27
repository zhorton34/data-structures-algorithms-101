"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*----------------------------------------------------------
 |   Merge Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n log n)
 |      . Aver: O(n log n)
 |      . Worst: O(n log n) 
 | 
 |   Space Complexity
 |      . O(n)
 |
 |   Divide And Conquer Sort
 |   Stable Sort
 |   Quick Sort Has A Better Space Complexity Than Merge Sort
 |   Merge Sorts Worst Case Time Complexity Is Better Than Quick Sort
 |   Merge Sort is A Stable Sort While Quick Sort is an Unstable Sort
 */
var merge = function merge() {
  var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var merged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var compare = function compare(_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
        a = _ref3[0];

    var _ref4 = _slicedToArray(_ref2, 1),
        b = _ref4[0];

    return (a !== null && a !== void 0 ? a : b + 1) < (b !== null && b !== void 0 ? b : a + 1);
  };

  var side = function side() {
    return compare(left, right) ? left : right;
  };

  while (left.length && right.length) {
    merged.push(side().shift());
  }

  while (right.length) {
    merged.push(right.shift());
  }

  while (left.length) {
    merged.push(left.shift());
  }

  return merged;
};

var MergeSort = function MergeSort() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (items.length <= 1) return items;
  var middle = Math.floor(items.length / 2);
  return merge(MergeSort(items.slice(0, middle)), MergeSort(items.slice(middle, items.length)));
};

module.exports = MergeSort;