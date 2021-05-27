"use strict";

/*--------------------------------------------------------
 |   Shell Sort
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
var ShellSort = function ShellSort() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var gaps = arguments.length > 1 ? arguments[1] : undefined;

  for (var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];

    for (var i = gap; i < items.length; i++) {
      var temp = items[i];

      for (var _j = i; _j >= gap && items[_j - gap] > temp; _j -= gap) {
        items[_j] = items[_j - gap];
      }

      items[j] = temp;
    }
  }

  return items;
};

module.exports = ShellSort;