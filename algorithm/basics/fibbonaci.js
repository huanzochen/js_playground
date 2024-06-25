// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  // add whatever parameters you deem necessary - good luck! 
  if (n <= 2) {
    return 1
  }

  console.log('fib(n - 1) + fib(n - 2):', fib(n - 1) + fib(n - 2))
  return fib(n - 1) + fib(n - 2)
}
  
// console.log('fib(3):', fib(3))
// console.log('fib(4):', fib(4))
console.log('fib(6):', fib(6))