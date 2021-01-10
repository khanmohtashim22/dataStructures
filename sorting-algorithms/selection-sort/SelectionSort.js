/*

Selection Sort

Pseudocode
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array unitl you find a smaller number
- If smaller number is found, designate that smaller number to be the new "minumum" and continue until end of array
- If the "minumum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next elment until array is sorted

Time Complexity
O(n^2)

*/

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]))
