// 以下 function 都要在 browser 中執行

function f1() {
    return this
}

console.log(f1() === global)