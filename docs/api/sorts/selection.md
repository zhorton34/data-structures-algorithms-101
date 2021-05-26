### Selection Sort
--


```js
 /*----------------------------------------------------------
 |   Selection Sort
 *----------------------------------------------------------
 |
 |   Time Complexity 
 |      . Best: O(n^2)
 |      . Aver: O(n^2)
 |      . Worst: O(n^2) 
 | 
 |   Space Complexity
 |      . O(1)
 |
 */

const SelectionSort = (items = []) => {
  for (let passes = 0; passes < items.length; passes++)
  {
    let min = passes

    for (let i = passes; i < items.length; i++)
    {
      if (items[min] > items[i]) {
        min = i
      }
    }

    if (min != passes)
    {
      let temporary = items[passes]
      items[passes] = items[min]
      items[min] = temporary
    }
  }

  return items
}
```

*Selection Sort*
