const generateNeighborMapping = (m, n) => {
  const neighbors = new Array(m * n).fill(null).map(() => [])

  let q = []

  const possible = m * n
  // 2 row 3 column

  // Example for 0 position
  // [1,2,3]
  // [4,5,0]
  // [6,7,8]
  // [x,0,x]

  // A. 窮舉 0 的各種視角，這樣就會出現很多個 switch case
  // If 0 is in the first line left and right corner, has 2 possibilities
  // If 0 is in the last line left and right corner, has 2 possibilities
  // If 0 is in thr first line middle position, has 3 possibilities
  // If 0 is in the middle of the line of middle, has 4 possibilities
  // If 0 is in the middle line of the left and right corder, has 3 possibilities

  for (let i = 0; i < possible; i++) {

    // B. 拆解 0 會遇到的各種狀況，符合就套用

    // 如果不是第一行，有上方鄰居
    // i - n >= 0, not the first row
    if (i - n >= 0) neighbors[i].push(i - n)

    // 如果不是第一列，有左側鄰居
    // i % n !== 0, not the first column
    if (i % n !== 0) neighbors[i].push(i - 1)

    // 如果不是最後一列，有右側鄰居
    // i % n !== n-1, not the last column
    if (i % n !== n - 1) neighbors[i].push(i + 1)

    // 如果不是最後一行，有下方鄰居
    // i + n < m * n, not the last row
    if (i + n < possible) neighbors[i].push(i + n)

    // neighbors[i].sort((a, b) => a - b)
  }

  return neighbors
}

const testCase = (tests, result) => {
  for (let i = 0; i < result.length; i++) {
    result[i].sort((a, b) => a - b)
  }

  console.log(JSON.stringify(generateNeighborMapping(tests.m, tests.n)) === JSON.stringify(result))
}


// Example for 0 position
// [1,2,3]
// [4,5,0]
// [6,7,8]
// [x,0,x]

testCase({ m: 2, n: 3 }, [
  [1, 3],
  [0, 4, 2],
  [1, 5],
  [0, 4],
  [3, 1, 5],
  [4, 2]
])