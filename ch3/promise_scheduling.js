var p3 = new Promise(function(resolve, reject) {
  resolve('B')
})

var p1 = new Promise(function(resolve, reject) {
  resolve(p3)
})

var p2 = new Promise(function(resolve, reject) {
  resolve('A')
})

p1.then(function(v) {
  console.log(v)
})

p2.then(function(v) {
  console.log(v)
})

// A B  <-- not  B A  as you might expect
// 結果答案是 A 先出來???