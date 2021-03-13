/*

Min Binary Heap

Time Complexity
Insertion = O(log N)
Removal = O(log N)
Searching = O(N)

*/

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor(((idx - 1) / 2))
      let parent = this.values[parentIdx]
      if (element >= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  extractMax() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftChildIdx = ((2 * idx) + 1)
      let rightChildIdx = ((2 * idx) + 2)
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild < element) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }

  }

}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
//               55
//         39         41
//       18  27     12   33

// [55, 39, 41, 18, 27, 33]

console.log('heap', heap.extractMax(), heap.extractMax(), heap)
