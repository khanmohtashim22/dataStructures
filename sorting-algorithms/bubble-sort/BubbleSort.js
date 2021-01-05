/*

Bubble Sort

Pseudocode
- Start with a variabl called i from the end of an array towards the begining
- Start an inner loop with a variable valled j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those 2 values
- Return the sorted array

Time Complexity
O(n^2)

*/

function bubbleSort(arr) {
  var noSwaps
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))