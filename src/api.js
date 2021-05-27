module.exports = {
	factory: require('@Factory/factory.js'),
	sorts: {
		heap: require('@Sort/HeapSort.js'),
		merge: require('@Sort/MergeSort.js'),
		quick: require('@Sort/QuickSort.js'),
		shell: require('@Sort/ShellSort.js'),
		radix: require('@Sort/RadixSort.js'),
		bubble: require('@Sort/BubbleSort.js'),
		insert: require('@Sort/InsertSort.js'),
		select: require('@Sort/SelectionSort.js'),
		counting: require('@Sort/CountingSort.js'),
	},
	search: {
		jump: require('@Search/JumpSearch.js'),
		linear: require('@Search/LinearSearch.js'),
		binary: require('@Search/BinarySearch.js'),
		interpolation: require('@Search/InterpolationSearch.js'),
	},
	helpers: {
		comparator: require('@Helper/Comparator.js')
	},
	structure: {
		heap: require('@DataStructure/Heap.js'),
		trie: require('@DataStructure/Trie.js'),
		array: require('@DataStructure/Array.js'),
		queue: require('@DataStructure/Queue.js'),
		stack: require('@DataStructure/Stack.js'),
		minHeap: require('@DataStructure/MinHeap.js'),
		maxHeap: require('@DataStructure/MaxHeap.js'),
		avlTree: require('@DataStructure/AVLTree.js'),
		hashTable: require('@DataStructure/HashTable.js'),
		linkedList: require('@DataStructure/LinkedList.js'),
		redBlackTree: require('@DataStructure/RedBlackTree.js'),
		directedGraph: require('@DataStructure/DirectedGraph.js'),
		priorityQueue: require('@DataStructure/PriorityQueue.js'),
		doublyLinkedList: require('@DataStructure/LinkedList.js'),
		adjacencyGraph: require('@DataStructure/AdjacencyGraph.js'),
		linkedListNode: require('@DataStructure/LinkedListNode.js'),
		unDirectedGraph: require('@DataStructure/UnDirectedGraph.js'),
		binarySearchTree: require('@DataStructure/BinarySearchTree.js'),
	}
}
