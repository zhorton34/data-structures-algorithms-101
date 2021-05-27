"use strict";

/*----------------------------------------------------------
 |   Insertion Sort
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
var InsertionSort = function InsertionSort() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  for (var i = 1; i < items.length; i++) {
    var index = i - 1;
    var temporary = items[i];

    while (index >= 0 && items[index] > temporary) {
      items[index + 1] = items[index];
      index--;
    }

    items[index + 1] = temporary;
  }

  return items;
};

module.exports = InsertionSort;