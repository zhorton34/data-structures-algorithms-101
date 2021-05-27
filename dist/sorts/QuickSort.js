"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*----------------------------------------------------------
 |   Quick Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n log n)
 |      . Aver: O(n log n)
 |      . Worst: O(n^2) 
 | 
 |   Space Complexity
 |      . O(log n)
 |
 |   Divide And Conquer Sort
 |   UnStable Sort
 |
 |   Better Space Complexity Than Merge Sort
 |   Time Complexity Worst Case Is Worse Than Merge Sort
 |   Merge Sort is A Stable Sort While Quick Sort is an Unstable Sort
 |
 */
var QuickSort = function QuickSort() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (items.length <= 1) return items;
  var pivot = items.pop();

  var pushToSide = function pushToSide(item) {
    return (item < pivot ? left : right).push(item);
  };

  items.forEach(pushToSide);
  return [].concat(_toConsumableArray(QuickSort(left)), [pivot], _toConsumableArray(QuickSort(right)));
};

module.exports = QuickSort;