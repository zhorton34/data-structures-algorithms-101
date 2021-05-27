/*--------------------------------------------------------
 |   Shell Sort
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

const ShellSort = (items = [], gaps) => {
	for (let g = 0; g < gaps.length; g++) {
		
		let gap = gaps[g]
		for (let i = gap; i < items.length; i++) {
		
			let temp = items[i]
			for (let j = i; j >= gap && items[j - gap] > temp; j -= gap)
				items[j] = items[j - gap]
			
			items[j] = temp
		}
		
	}

	return items
}


module.exports = ShellSort