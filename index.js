const { Factory } = require('./factory.js')
const { sorts } = require('./sorts/index.js')

console.log({ sorts })
module.exports = { sorts }

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

console.log('Bubble Sort: ', sorts.bubble(Factory.DummyArray(100, 1000)))

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
console.log('Insertion Sort: ', sorts.insert(Factory.DummyArray(100, 1000)))

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
console.log('Selection Sort: ', sorts.select(Factory.DummyArray(100, 1000)))

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
console.log('Quick Sort: ', sorts.quick(Factory.DummyArray(100, 1000)))

/*----------------------------------------------------------
 |   Merge Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n log n)
 |      . Aver: O(n log n)
 |      . Worst: O(n log n) 
 | 
 |   Space Complexity
 |      . O(n)
 |
 |   Divide And Conquer Sort
 |   Stable Sort
 |   Quick Sort Has A Better Space Complexity Than Merge Sort
 |   Merge Sorts Worst Case Time Complexity Is Better Than Quick Sort
 |   Merge Sort is A Stable Sort While Quick Sort is an Unstable Sort
 */
console.log('Merge Sort: ', sorts.merge(Factory.DummyArray(100, 1000)))
