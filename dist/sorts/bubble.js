"use strict";

/*----------------------------------------------------------
 |   Bubble Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n)
 |      . Aver: O(n^2)
 |      . Worst: O(n^2) 
 | 
 |   Space Complexity
 |      . O(1)
 |
 */
var BubbleSort = function BubbleSort() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  for (var i = 0; i < items.length; i++) {
    for (var j = 0; j < items.length; j++) {
      if (items[j] > items[j + 1]) {
        var temporary = items[j];
        items[j] = items[j + 1];
        items[j + 1] = items[j];
      }
    }
  }

  return items;
};

module.exports = {
  BubbleSort: BubbleSort
};