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
 }
 ```