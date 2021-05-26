### Insertion Sort
--

```js
/*----------------------------------------------------------
 |   Insertion Sort
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

 const InsertionSort = (items = []) => {
    for (let i = 1; i < items.length; i++)
    {
      let index = i-1
      let temporary = items[i]

      while (index >= 0 && items[index] > temporary)
      {
        items[index + 1] = items[index]

        index--
      }

      items[index + 1] = temporary
    }

    return items
}
```

*Insertion Sort*