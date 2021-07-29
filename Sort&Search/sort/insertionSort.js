// 插入排序
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i += 1 ) {
    // 1. 第二个数往前比
    const tmp =this[i]
    let j = i;
    while (j > 0) {
      // 如果第二个数比前一个数大, 后移
      if (this[j - 1] > tmp) {
        this[j] = this[j - 1] 
      } else {
        break
      }
      j -= 1
    }
    this[j] = tmp
  }
}

const arr = [5, 4, 3, 2, 1]
arr.insertionSort()