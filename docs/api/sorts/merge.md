### Merge Sort
--

```js
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
 |
 */

 const merge = (left = [], right = [], merged = []) => {
  let compare = ([a], [b]) => (a ?? b+1) < (b ?? a+1)
  let side = () => compare(left, right) ? left : right

  while (left.length && right.length) merged.push(side().shift())
  while (right.length) merged.push(right.shift())
  while (left.length) merged.push(left.shift())

  return merged
}

const MergeSort = (items = []) => {
  if (items.length <= 1) return items

  const middle = Math.floor(items.length/2)

  return merge(
    MergeSort(items.slice(0, middle)),
    MergeSort(items.slice(middle, items.length))
  )
}


```

*Merge Sort*
