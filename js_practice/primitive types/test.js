let buffer = new ArrayBuffer(16)
let int32View = new Int32Array(buffer)


console.log(buffer)
console.log(int32View)

// for (let i = 0; i < int32View.length; i++) {
//     console.log(int32View[i] = i * 2)
// }