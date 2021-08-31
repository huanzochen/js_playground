let obj = {
    // 原本 method 的撰寫方式
    calcArea: function() {
        return 'calcArea'
    },
    // ECMA2015 之後的撰寫方式
    calcArea2 () {
        return 'calcArea2'
    }
}

console.log(obj.calcArea())
console.log(obj.calcArea2())
