/*---------------------------------------------------------------
 |   Binary Search
 *---------------------------------------------------------------
 |
 |   . Time Complexity 
 |     -> Best: O(1)
 |     -> Average: O(log n)
 |
 */ 

const BinarySearch = (sorted = [], key) => {
	let [lo, hi] = [0, sorted.length - 1]

	while (lo <= hi)
	{
		let mid = Math.floor((lo + hi) / 2)

		if (key === sorted[mid]) return mid
		else if (key < sorted[mid]) hi = mid - 1
		else if (key > sorted[mid]) lo = mid + 1
	} 

	return - 1
}

module.exports = BinarySearch