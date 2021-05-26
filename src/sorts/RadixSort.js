/*--------------------------------------------------------
 |   Radix Sort
 *--------------------------------------------------------
 |
 |   . Time Complexity
 |     -> Best: Ω(n log(n))	
 |     -> Avrg: Θ(n(log(n))^2)	
 |     -> Worst: O(n(log(n))^2)	
 |
 |   . Space Complexity
 |     -> O(1)
 |
 |
 |   . Notes
 |     -> It is a generalized version of insertion sort.
 |     -> Sorts the elements far apart from each other and successively reduces the interval between the elements to be sorted.
 |     -> In shell sort, elements at a specific interval are sorted.
 */
 
const getMax = items => { // O(n)
	let max = 0
	for (let num of items) {
		max = (max < num.toString().length) ? num.toString().length : max
	}

	return max
}


const RadixSort = items => { // O(nk)
	let max = getMax(items)
	
	for (let i = 0; i < max; i++) {
		
		let buckets = Array.from({ length: 10 }, () => [])
		for (let j = 0; j < items.length; j++) {
			buckets[getPosition(items[j], i)].push(items[j])
		}
		
		items = [].concat(...buckets)
	}

	return items
}


module.exports = { RadixSort }