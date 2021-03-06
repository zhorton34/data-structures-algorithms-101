"use strict";

var sorts = {
  radix: require('./radix.js').RadixSort,
  shell: require('./shell.js').ShellSort,
  merge: require('./merge.js').MergeSort,
  quick: require('./quick.js').QuickSort,
  bubble: require('./bubble.js').BubbleSort,
  insert: require('./insert.js').InsertionSort,
  select: require('./select.js').SelectionSort,
  counting: require('./counting.js').CountingSort
};
module.exports = {
  sorts: sorts,
  divideAndConquer: {
    merge: sorts.merge,
    quick: sorts.quick
  },
  stable: {
    merge: sorts.merge,
    bubble: sorts.bubble,
    insert: sorts.insert // timsort
    // counting sort

  },
  unstable: {
    quick: sorts.quick,
    select: sorts.select // heapsort

  }
};