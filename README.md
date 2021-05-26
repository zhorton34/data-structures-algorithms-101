[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/package.json)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)




##### Bubble
---
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



#### Search Algorithms
---
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

---

## <img src='https://api.github.com/images/icons/emoji/point_down.png' height="50" width='50' alt='coffee icon data structures and algorithms 101'/> Installation




### Git

```bash
git clone https://github.com/zhorton34/data-structures-and-algorithms-101

cd data-structures-and-algorithms-101

npm install && npm run build

node

let Api = require('./dist/index.js')
```

---

## <img src='https://api.github.com/images/icons/emoji/coffee.png' height="50" width='50' />  Official Apis

---

- [algorithms](#algorithms
- [comparison-vs-non-comparison-sorts](#comparison-vs-non-comparison-sorts
- [divide-and-conquer-sorts](#divide-and-conquer-sorts
- [search](#search
- [sorts](#sorts
- [structures](#structures

###
#### Other Alogirthms
---
- [Dijkstra's Algorithm](https://google.com?q=dijkstrasalgorithm)
- [Topological Sort & Shortest-path in a DAG](TODO)
- [Bellman-Ford](TODO)



##### Divide And Conquer Sorts

- Quick Sort

####### Searching Algorithms
---
- [Linear search](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/searches/linear.js)
- [Binary search](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/searches/binary.js)
- [Depth first search (DFS)](https://google.com?q=depthfirstsearch)

####### Sorting Algorithms
---
- [Merge sort](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/sorts/merge.js) 
- [Quick sort](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/sorts/quick.js)
- [Bubble sort](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/sorts/bubble.js)
- [Insertion sort](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/sorts/insert.js)
- [Selection sort](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/sorts/select.js)
- [Radix sort](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/sorts/radix.js)

###
#### Data Structures
---
- [Array](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/structures/array.js)
- [Hash Tables](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/structures/hash-table.js)
- [Queue](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/structures/queue.js)
- [Stack](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/structures/stack.js) 
- [Binary Search Trees](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/structures/binary-search-tree.js)
- [Binary Heaps](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/structures/binary-heap.js)

---

## Contribute

---

PRs are welcomed to this project.
If you want to improve the vuejs-form library, add
functionality or improve the docs please feel free to submit a PR.


---

### Release Pre-Alpha

---
> _"Pre-alpha refers to all activities performed during the software project before formal testing._
> _These activities can include requirements analysis, software design, software development, and_
> _unit testing. In typical open source development, there are several types of pre-alpha versions._
> _Milestone versions include specific sets of functions and are released as soon as the feature is complete."_

- Adding initial data structures
- Adding initial algorithms


---

## Versioning

---

> Data Structures and Algorithms 101 (In JavaScript) will eventually implement semantic versioning
> 

|Code Status|Stage|Rule|Example Version|
|---|---|---|---|
|First release|New Product|Start with 1.0.0|1.0.0|
|Backward compatible bug fixes|Patch Release|Increment the third digit|1.0.1|
|Backward compatible new features|Minor Release|Increment the middle digit and reset last digit to zero|1.1.0|
|Changes that break backward compatibility|Major Release|Increment the first digit and reset middle and last digits to zero|2.0.0|

- [Learn More About Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)


---

## License

---

MIT © [Zachary Horton (Clean Code Studio)](https://www.youtube.com/channel/UCq0m4ebGqurYQLwD-1aYsvg)
