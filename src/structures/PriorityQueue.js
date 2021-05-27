/*--------------------------------------------------------------
 |  Priority Queue
 *--------------------------------------------------------------
 |
 |   . Api
 |     -> add
 |        @param {*}
 |        @param {number} (priority)
 |        @return {PriorityQueue}
 |     -> remove
 |        @param {*}} item (we're going to move)
 |        @param {Comparator} [customFindingComparator]
 |        @return {PriorityQueue}
 |     -> changePriority
 |        @param {*} item
 |        @param {number} priority
 |        @return {PriorityQueue}
 |     -> findByValue
 |        @param {*} item
 |        @return {Number[]}
 |     -> hasValue
 |        @param {*} item
 |        @return {boolean}
 |     -> comparePriority
 |        @param {*} a
 |        @param {*} b
 |        @return {number}
 |     -> compareValue
 |        @param {*} a
 |        @param {*} b
 |        @return {number}
 |
 */
const MinHeap = require('@DataStructure/MinHeap.js')
const Comparator = require('@Helper/Comparator.js')

class PriorityQueue extends MinHeap
{
	static make(...parameters)
	{
		return new this(...parameters)
	}

	constructor() 
	{
		super()

		this.priorities = new Map()

		this.compare = Comparator.make(this.comparePriority.bind(this))
	}

	add(item, priority = 0)
	{
		this.priorities.set(item, priority)
		supper.add(item)
		return this
	}

	remove(item, customFindingComparator)
	{
		super.remove(item, Comparator.make(this.compareValue))
		this.priorities.delete(item)
		return this
	}

	changePriority(item, priority)
	{
		this.remove(item, Comparator.make(this.compareValue))
		this.add(item, priority)
		return this
	}

	findByValue(item)
	{
		return this.find(item, Comparator.make(this.compareValue))
	}

	hasValue(item)
	{
		return this.findByValue(item).length > 0
	}

	comparePriority(a, b)
	{
		if (this.priorities.get(a) === this.priorities.get(b)) return 0

		return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1
	}

	compareValue(a, b)
	{
		if (a === b) return 0

		return a < b ? -1 : 1
	}
}

module.exports = PriorityQueue