



// // 面試時的解法 function prototype
function Counter() {
 
}
Counter.prototype = {
    num: 0
}

Counter.prototype.total = function() {
    return this.num
}
Counter.prototype.add = function(addNum) {
    this.num += addNum 
}

// // 第二種解法 class 版本
// class Counter {
//     constructor(num) {
//         this.num = num ? num : 0
//     }
    
//     add(addNum) {
//         this.num = this.num + addNum
//     }

//     total() {
//         return this.num
//     }
// }

// // 第三種錯誤方法  Ans: Counter is not a constructor , 不能這樣做, 因為 object 不是 Constructor
// let Counter = {
//     num:0,

//     add: function(addNum) {
//         this.num += addNum
//     },
//     total: function() {
//         return this.num
//     }
// }



// 宣告 Counter 讓下面程序可以運作
const counter = new Counter()
counter.add(1)
counter.add(4)

console.log(counter.total()) // 結果為 5