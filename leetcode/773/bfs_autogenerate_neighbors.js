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

const getOneDimensionArray = (board) => board.flat()

const getString = (oneDimensionArray) => oneDimensionArray.join('')

const findZeroPos = (cur) => {
  // "123450" this is a example of stringBoard.
  // With zero, we can know with index are [0,2,3,5] has two possibilities, [1,4] has three possibilities
  // Find 0 is in which index
  let pos = null
  cur.forEach((c, i) => {
      if (c === 0) {
          pos = i
      }
  })
  return pos
}

const swap = (a, b, nums) => {
  const newNums = [...nums]
  const temp = newNums[a]
  newNums[a] = newNums[b]
  newNums[b] = temp
  return newNums
}

/**
* @param {number[][]} board
* @return {number}
*/
var slidingPuzzle = function (board) {
  let moves = 0
  let zBoard = Array.from({ length: 2 }, () => Array(3).fill(','))
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          zBoard[i][j] = board[i][j]
      }
  }

  // Queue for storing BFS
  let q = [getOneDimensionArray(zBoard)]
  let initialPos = getString(getOneDimensionArray(zBoard))
  let visited = new Set()

  // I get the 0's neighbor in each index of value.
  let neighbors = generateNeighborMapping(2, 3)

  while (q.length > 0) {
      let size = q.length
      for (let i = 0; i < size; i++) {
          const current = q.shift()
          // Find if there is the answer "123450"
          if (getString(current) === "123450") return moves
          // Get Zero index
          const zeroIndex = findZeroPos(current)
          // console.log('zeroIndex:', zeroIndex, 'current:', current)

          for (let neighbor of neighbors[zeroIndex]) {
              // console.log('neighbor:', neighbor, 'zeroIndex:', zeroIndex)
              const swappedCur = swap(neighbor, zeroIndex, current)
              // console.log('q:', q)
              // console.log('current:', current, 'swappedCur:', swappedCur)
              if (visited.has(getString(swappedCur))) continue
              else {
                  q.push(swappedCur)
                  visited.add(getString(swappedCur))
              }
          }
      }
      // console.log('q:', q)
      moves++
  }
  return -1
};