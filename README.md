## Sorting Algorithms
---
- merge sort
- quick sort
- bubble sort
- insertion sort
- selection sort


### Bubble
```js
const { Factory } = require('./factory.js')
const { sorts } = require('./sorts/index.js')

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
const BubbleSort = (items = []) => {
  for (let i = 0; i < items.length; i++)
  {
    for (let j = 0; j < items.length; j++)
    {
      if (items[j] > items[j + 1])
      {
         let temporary = items[j]
         items[j] = items[j + 1]
         items[j + 1] = items[j]
      }
    }
  }

  return items
}



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

 const InsertionSort = (items = []) => {
    for (let i = 1; i < items.length; i++)
    {
      let index = i-1
      let temporary = items[i]

      while (index >= 0 && items[index] > temporary)
      {
        items[index + 1] = items[index]

        index--
      }

      items[index + 1] = temporary
    }

    return items
}

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

const SelectionSort = (items = []) => {
  for (let passes = 0; passes < items.length; passes++)
  {
    let min = passes

    for (let i = passes; i < items.length; i++)
    {
      if (items[min] > items[i]) {
        min = i
      }
    }

    if (min != passes)
    {
      let temporary = items[passes]
      items[passes] = items[min]
      items[min] = temporary
    }
  }

  return items
}

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
 const QuickSort = (items = [], left = [], right = []) => {
    if (items.length <= 1) return items

    let pivot = items.pop()
    let pushToSide = item => (item < pivot ? left : right).push(item)

    items.forEach(pushToSide)
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}
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

console.log('Merge Sort: ', sorts.merge(Factory.DummyArray(100, 1000)))
```



## Search Algorithms
- Linear Search
- Binary Search


```js
/*----------------------------------------------------------
 |   Binary Search
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(1)
 |      . Aver: O(log n)
 |      . Worst: O(log n) 
 | 
 |   Space Complexity
 |      . O(1)
 |   Notes
 |      . Array Must be sorted for binary search to work
 |      . Binary Search is Uber Fast O(log n) is the fastest outside of Constant Time Complexity
 |
 */

const BinarySearch = (sorted = [], key) => {
	let lo = 0
	let hi = sorted.length - 1

	while (lo <= hi)
	{
		let mid = Math.floor((lo + hi) / 2)

		if (key === sorted[mid]) return mid
		else if (key < sorted[mid]) hi = mid - 1
		else if (key > sorted[mid]) lo = mid + 1
	} 

	return - 1
}



/*----------------------------------------------------------
 |   Linear Search
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(1)
 |      . Aver: O(n)
 |      . Worst: O(n) 
 | 
 |   Space Complexity
 |      . O(1)
 |
 |   Notes
 |      . Unlike Binary Search, Linear doesn't require sorted array
 |      . Much, much, much slower than binary search on large lists of items
 |
 */

 const LinearSearch = (items = [], key) => {
 	for (let i = 0; i < items.length; i++) {
 		if (items[i] === key) return i
 	}

 	return -1
 }
```