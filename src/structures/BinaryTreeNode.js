/*------------------------------------------------------------------------------------
 |   Binary Tree Node
 *------------------------------------------------------------------------------------
 |
 |   . Api
 |     -> leftHeight
 |        @return {number}
 |     -> rightHeight
 |        @return {number}
 |     -> height
 |        @return {number}
 |     -> balanceFactor
 |        @return {number}
 |     -> uncle
 |        @return {BinaryTreeNode}
 |     -> setValue
 |        @param {*} value
 |        @return {BinaryTreeNode}
 |     -> setLeft
 |        @param {BinaryTreeNode} node
 |        @return {BinaryTreeNode}
 |     -> setRight
 |        @param {BinaryTreeNode} node
 |        @return {BinaryTreeNode}
 |     -> removeChild
 |        @param {BinaryTreeNode} nodeToRemove
 |        @return {boolean}
 |     -> replaceChild
 |        @param {BinaryTreeNode} nodeToReplace
 |        @param {BinaryTreeNode} replacementNode
 |        @return {boolean}
 |     -> copyNode (static)
 |        @param {BinaryTreeNode} sourceNode
 |        @param {BinaryTreeNode} targetNode
 |     -> traverseInOrder
 |        @return {*[]}
 |     -> toString
 |        @return {string}
 |
 */
const HashTable = require('@DataStructure/HashTable.js')
const Comparator = require('@Helper/Comparator')


class BinaryTreeNode 
{
  static make(...parameters)
  {
    return new this(...parameters)
  }

  constructor(data = null) 
  {
    this.data = data
    this.left = null
    this.right = null
    this.parent = null

    // Any node related meta information may be stored here.
    this.meta = HashTable.make()

    // This comparator is used to compare binary tree nodes with each other.
    this.nodeComparator = Comparator.make()
  }


  get leftHeight() 
  {
    if (!this.left) return 0
    
    return this.left.height + 1
  }

  get rightHeight() 
  {
    if (!this.right) return 0
    
    return this.right.height + 1
  }

  get height() 
  {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get balanceFactor() 
  {
    return this.leftHeight - this.rightHeight
  }

  get uncle() 
  {
    if (!this.parent) return undefined

    // Check if current node has grand-parent.
    if (!this.parent.parent) return undefined
    
    // Check if grand-parent has two children.
    if (!this.parent.parent.left || !this.parent.parent.right) return undefined

    // So for now we know that current node has grand-parent and this
    // grand-parent has two children. Let's find out who is the uncle.
    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) return this.parent.parent.right

    // Left one is an uncle.
    return this.parent.parent.left
  }

  setValue(value) 
  {
    this.value = value

    return this
  }


  setLeft(node) 
  {
    // Reset parent for left node since it is going to be detached.
    if (this.left) this.left.parent = null

    // Attach new node to the left.
    this.left = node

    // Make current node to be a parent for new left one.
    if (this.left) this.left.parent = this
    
    return this
  }

  setRight(node) 
  {
    // Reset parent for right node since it is going to be detached.
    if (this.right) this.right.parent = null

    // Attach new node to the right.
    this.right = node

    // Make current node to be a parent for new right one.
    if (node) this.right.parent = this
    
    return this
  }

  removeChild(nodeToRemove) 
  {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null
      return true
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null
      return true
    }

    return false
  }

  replaceChild(nodeToReplace, replacementNode) 
  {
    if (!nodeToReplace || !replacementNode) return false

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode
      return true
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode
      return true
    }

    return false
  }

  static copyNode(sourceNode, targetNode) 
  {
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }

  traverseInOrder() 
  {
    let traverse = []

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }

    // Add root.
    traverse.push(this.value)

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }

    return traverse
  }

  toString() 
  {
    return this.traverseInOrder().toString()
  }
}

module.exports = BinaryTreeNode