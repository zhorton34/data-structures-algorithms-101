"use strict";

/*----------------------------------------------------------
 |   Binary Search
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(1)
 |      . Aver: O(log n)
 |      . Worst: O(log n) 
 | 
 |   Space Complexity
 |      . O(1)
 |   Notes
 |      . Array Must be sorted for binary search to work
 |      . Binary Search is Uber Fast O(log n) is the fastest outside of Constant Time Complexity
 |
 */
var BinarySearch = function BinarySearch() {
  var sorted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var lo = 0;
  var hi = sorted.length - 1;

  while (lo <= hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (key === sorted[mid]) return mid;else if (key < sorted[mid]) hi = mid - 1;else if (key > sorted[mid]) lo = mid + 1;
  }

  return -1;
};

module.exports = {
  BinarySearch: BinarySearch
};