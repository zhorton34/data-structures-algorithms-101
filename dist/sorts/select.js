"use strict";

/*----------------------------------------------------------
 |   Selection Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n^2)
 |      . Aver: O(n^2)
 |      . Worst: O(n^2) 
 | 
 |   Space Complexity
 |      . O(1)
 |
 */
var SelectionSort = function SelectionSort() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  for (var passes = 0; passes < items.length; passes++) {
    var min = passes;

    for (var i = passes; i < items.length; i++) {
      if (items[min] > items[i]) {
        min = i;
      }
    }

    if (min != passes) {
      var temporary = items[passes];
      items[passes] = items[min];
      items[min] = temporary;
    }
  }

  return items;
};

module.exports = {
  SelectionSort: SelectionSort
};