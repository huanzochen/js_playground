
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const getString = (oneDimensionArray) => oneDimensionArray.join('')

  const getOneDimensionArray = (board) => board.flat()

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

  const swapAndAssignNewArray = (a, b, nums) => {
      let newNum = [...nums]
      const temp = newNum[a]
      newNum[a] = newNum[b]
      newNum[b] = temp

      // console.log('swapAndAssignNewArray', 'visited.has(newNum):', visited.has(getString(newNum)))

      // the same sort
      if (visited.has(getString(newNum))) {
          return
      }
      q.push([...newNum])
      visited.add(getString(newNum))
      // console.log('q.length:', q.length, 'visited.size:', visited.size)
      return
  }

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

  while (q.length > 0) {
      let size = q.length
      for (let i = 0; i < size; i++) {
          const current = q.shift()

          // Find if there is the answer "123450"
          if (getString(current) === "123450") return moves

          // Find where is zero and decide there are 2 or 3 moves
          let zeroPos = findZeroPos(current)
          switch (zeroPos) {
              case 0:
                  swapAndAssignNewArray(1, 0, current)
                  swapAndAssignNewArray(3, 0, current)
                  break
              case 1:
                  swapAndAssignNewArray(0, 1, current)
                  swapAndAssignNewArray(2, 1, current)
                  swapAndAssignNewArray(4, 1, current)
                  break
              case 2:
                  swapAndAssignNewArray(1, 2, current)
                  swapAndAssignNewArray(5, 2, current)
                  break
              case 3:
                  swapAndAssignNewArray(0, 3, current)
                  swapAndAssignNewArray(4, 3, current)
                  break
              case 4:
                  swapAndAssignNewArray(1, 4, current)
                  swapAndAssignNewArray(3, 4, current)
                  swapAndAssignNewArray(5, 4, current)
                  break
              case 5:
                  swapAndAssignNewArray(2, 5, current)
                  swapAndAssignNewArray(4, 5, current)
                  break
          }
      }
      // console.log('q:', q)
      moves++
  }
  return -1
};