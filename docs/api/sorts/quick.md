### Quick Sort
--


```js
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
 const QuickSort = (items = [], left = [], right = []) => {
    if (items.length <= 1) return items

    let pivot = items.pop()
    let pushToSide = item => (item < pivot ? left : right).push(item)

    items.forEach(pushToSide)
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}
```

*Quick Sort*
