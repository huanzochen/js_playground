let obj = {
    0: {
        2: '5',
        5: '6',
        8: '7'
    },
    1: [2, 3, 5]
}

console.log(Object.values(obj))

// obj 的 key must be string;
console.log(Object.keys(obj))

// obj 的 length
console.log(Object.keys(obj).length)

// 假設是一個空的 object, obj2 的 length
let obj2 = {}
console.log(Object.keys(obj2).length)


// 找說 0 這個 object 中是否有 0 
console.log('obj[0].hasOwnProperty(0):', obj[0].hasOwnProperty(0))
// 找說 0 這個 object 中是否有 2 
console.log('obj[0].hasOwnProperty(2):', obj[0].hasOwnProperty(2))


// 找到該 obj 中是否有 hasOwnProperty
for (const [oIndex, o] of Object.keys(obj).entries()) {
    console.log(obj[o].hasOwnProperty(5), 'hasOwnProperty')
}

console.log(obj.hasOwnProperty(0))