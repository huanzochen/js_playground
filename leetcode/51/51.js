/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = []
  let board = Array.from({ length: n }, () => Array(n).fill('.'))

  // console.log('board:', board, 'board.length:', board.length)

  const isValid = (board, row, col) => {
    const n = board.length
    for (let i = 0; i < n; i++) {
      if (board[i][col] === 'Q') return false
    }
    // 檢查右上角
    for (let i = row - 1, j = col + 1; i >= 0 && col < n; i--, j++) {
      console.log('i:', i, 'j:', j)
      if (board[i][j] === 'Q') return false
    }
    // 檢查左上角
    for (let i = row - 1, j = col - 1; i >= 0 && col > 0; i--, j--) {
      if (board[i][j] === 'Q') return false
    }
    return true
  }

  const backtrack = (board, row) => {
    // base case(when to stop the recursive call)
    if (row === board.length) {
      // console.log('row:',row,'board:',board)
      res.push(JSON.parse(JSON.stringify(board))) // deep copy
      return
    }

    let n = board[row].length
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue
      }
      board[row][col] = 'Q'
      backtrack(board, row + 1)
      board[row][col] = '.'
    }
  }
  backtrack(board, 0)

  return res
}