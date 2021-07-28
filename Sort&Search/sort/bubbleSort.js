// 冒泡排序

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    for (let j = 0; j < this.length - 1 - i; j += 1) {
      if (this[j] > this[j + 1]) {
        const tmp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = tmp
      }
    }
  }
}

const arr = [5, 4, 3, 2, 1]
arr.bubbleSort()