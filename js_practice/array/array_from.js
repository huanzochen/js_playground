const n = 5
const board = Array.from({ length: n }, () => Array(n).fill('.'))

board[2][3] = 'A'
console.log('board:', board)