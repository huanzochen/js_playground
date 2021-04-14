

var aaa = function() {
  console.log('aaa function expression')
  for (var i = 0;i < 5; i++) {
    setTimeout(function() {
      console.log(i)
    }, 1)
  }
  // 會顯示的答案為
}

var bbb = function bbbFunc() {
  console.log('bbb function expression')
  for (let i = 0; i < 5;i++) {
    setTimeout(function() {
      console.log(i)
    }, 500)
  }
}


aaa()
bbb()


// 一些針對型別和賦值的檢查 測試


var ccc = bbb
console.log(aaa.name)
console.log(bbb.name)
console.log(ccc.name)
console.log(typeof bbb)
console.log(typeof ccc)
console.log(typeof bbbFunc)
console.log(bbb === ccc)

function bb() {
  console.log('bbb function expression')
  for (let i = 0; i < 5;i++) {
    setTimeout(function() {
      console.log(i)
    }, 500)
  }
}
var cc = bb
console.log(bb.name)
console.log(cc.name)
console.log(typeof bb)
console.log(typeof cc)
console.log(bb === cc)
