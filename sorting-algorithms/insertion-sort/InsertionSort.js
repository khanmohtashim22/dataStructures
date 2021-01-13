/*

Insertion Sort

Pseudocode
- Start by picking the second element in the array, since we are assuming first is already sorted
- Now compare the second element with the one before it and swap if neccessary
- Continue to the next element and if in the incorret order, 
  iterate through the sorted portion (i.e the left side) to place the element in the correct place
- Repeat until array is sorted

Time Complexity
O(n^2)

*/

function insertionSort(arr) {
  var currentVal
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))