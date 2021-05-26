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

