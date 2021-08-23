[![Twitter Follow](https://img.shields.io/twitter/follow/cleancodestudio.svg?style=social)](https://twitter.com/cleancodestudio) 

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/zhorton34/data-structures-algorithms-101/blob/master/package.json)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)


- [adjacency-graph](#adjacency-graph)
- [array](#array)
- [binary-heap](#binary-heap)
- [binary-search-tree](#binary-search-tree)
- [hash-table](#hash-table)
- [priority-queue](#priority-queue)
- [queue](#queue)
- [singley-linked-list](#singley-linked-list)
- [stack](#stack)

### Adjacency Graph
--

- [Adjacency Graph](src/structures/AdjacencyGraph)



### Array
--

- [Array](src/structures/Array)



### Binary Heaps
--

- [Binary Heaps](src/structures/BinaryHeap)



### Binary Search Tree
--

- [Binary Search Trees](src/structures/BinarySearchTree)



### Hash Table
--

- [Hash Tables](src/structures/HashTable)



### Priority Queue
--

- [Priority Queue](src/structures/PriorityQueue)


### Queue
--

- [Queue](src/structures/Queue)



### Singley Linked List
--

- [Singley Linked List](src/structures/LinkedList)



### Stack
--

- [Stack](src/structures/Stack)


- [binary](#binary)
- [linear](#linear)

### Binary Search
--

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

	return -1
}
```

### Linear Search
--

```js
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
