
// https://opendatastructures.org/versions/edition-0.1c/ods-java/node36.html


// lookup
// insert
// delete
// access 

// depth
// count
// isEmpty
// isNotEmpty


/** 
 | has(value)
   insert(value)
   lookup(value)
 | delete(value) // TODO: fix this function
 | depthFirstLog (cllback)
*/

class BinarySearchTree 
{
    constructor (value)
    {
      this.value = value 
      this.left = undefined
      this.right = undefined

      return this
    }

    insert (value)
    {
      let node = new BinarySearchTree(value)

      let recurse = bst => {
        if (bst.value > value && bst.left === undefined) {
          bst.left = node
        } else if (bst.value > value) {
          recurse(bst.left)
        } else if (bst.value < value && bst.right === undefined) {
          bst.right = node
        } else if (bst.value < value) {
          recurse(bst.right)
        }
      }

      recurse(this)

    }

    lookup (value)
    {
      let resolved = -1
      let recurse = bst => {
        if (bst.value === value) {
          resolved = bst
        } else if (bst.left !== undefined && value < bst.value) {
          recurse(bst.left)
        } else if (bst.right !== undefined && value > bst.value) {
          recurse(bst.right)
        }
      }

      recurse(this)
      
      return resolved
    }

    has (value)
    {
      let hasValue = false;
      //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
      let recurse = bst => {
        if (bst.value === value) {
          hasValue = true
        } else if (bst.left !== undefined && value < bst.value) {
          recurse(bst.left)
        } else if (bst.right !== undefined && value > bst.value) {
          recurse(bst.right)
        }
      }

      recurse(this)
      
      return hasValue
    }

    delete (start) 
    {
      let data = []
      let queue = []

      let node = start ? this.lookup(start) : this.root

      queue.push(node)
      while (queue.length) {
        node = queue.shift()
        data.push(node.value)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }

    depthFirstLog (callback = console.log)
    {
      let recurse = bst => {
        callback.call(bst, bst.value)

        if (bst.left !== undefined) recurse(bst.left)
        if (bst.right !== undefined) recurse(bst.right)
      }

      recurse(this)
    }
}

  

module.exports = BinarySearchTree
