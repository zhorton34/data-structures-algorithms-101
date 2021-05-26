"use strict";

/*----------------------------------------------------------
 |   Counting Sort
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
var CountingSort = function CountingSort(items, min, max) {
  var count = [];
  var i = min;
  var j = 0;

  for (i; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < items.length; i++) {
    count[items[i]] += 1;
  }

  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      items[j] = i;
      j++;
      items[i]--;
    }
  }

  return items;
};

module.exports = {
  CountingSort: CountingSort
};