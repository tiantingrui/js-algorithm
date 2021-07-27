// 最小堆类

class MinHeap {
  constructor() {
    this.heap = []
  }
  shiftUp(index) {

  }
  insert(value) {
    this.heap.push(value)
    // 上移
    this.shiftUp()
  }
}