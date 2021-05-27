/*----------------------------------------------------------
 |   Bubble Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n)
 |      . Aver: O(n^2)
 |      . Worst: O(n^2) 
 | 
 |   Space Complexity
 |      . O(1)
 |
 */


const BubbleSort = (items = [], callback) => {
  for (let i = 0; i < items.length; i++)
  {
    for (let j = 0; j < items.length; j++)
    {
      if (callback) callback()

      if (items[j] > items[j + 1])
      {
         let temporary = items[j]
         items[j] = items[j + 1]
         items[j + 1] = temporary
      }
    }
  }

  return items
}


module.exports = BubbleSort
