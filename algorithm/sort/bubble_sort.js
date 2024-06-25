const sorted = [1, 22, 4, 65, 7, 8, 10, 777, 8, 1232, 999]

const bubble_sort = (sorted) => {
  let temp = 0
  let i = 0
  const length = sorted.length - 1

  for (i = 0;i < length; i++) {
    for (let j = length; j > i; j--) {
      if (sorted[j] < sorted[j - 1]) {
        console.log('sorted[j] < sorted[j - 1]:', sorted[j], sorted[j - 1])
        temp = sorted[j]
        sorted[j] = sorted[j - 1]
        sorted[j - 1] = temp
        console.log('sorted:', sorted)
      }
    }
        
  }
  return sorted
}

const result = bubble_sort(sorted)
console.log('result:', result)