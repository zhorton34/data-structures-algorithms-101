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
  var callback = arguments.length > 1 ? arguments[1] : undefined;

  for (var i = 0; i < items.length; i++) {
    for (var j = 0; j < items.length; j++) {
      if (callback) callback();

      if (items[j] > items[j + 1]) {
        var temporary = items[j];
        items[j] = items[j + 1];
        items[j + 1] = items[j];
      }
    }
  }

  return items;
};

module.exports = BubbleSort;