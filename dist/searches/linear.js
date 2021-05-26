"use strict";

/*----------------------------------------------------------
 |   Linear Search
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(1)
 |      . Aver: O(n)
 |      . Worst: O(n) 
 | 
 |   Space Complexity
 |      . O(1)
 |
 |   Notes
 |      . Unlike Binary Search, Linear doesn't require sorted array
 |      . Much, much, much slower than binary search on large lists of items
 |
 */
var LinearSearch = function LinearSearch() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;

  for (var i = 0; i < items.length; i++) {
    if (items[i] === key) return i;
  }

  return -1;
};

module.exports = {
  LinearSearch: LinearSearch
};