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


const QuickSort = (items = [], left = [], right = [], callback) => {
    if (callback) callback()
    if (items.length < 2) return items

  	let [pivot, ...list] = items
    list.forEach(item => (item < pivot ? left : right).push(item))

    return [...QuickSort(left, [], [], callback), pivot, ...QuickSort(right, [], [], callback)]
}


module.exports = QuickSort
