let raven = {
    type: 'hero',
    skills:{
        q:'Q',
        w:'W',
        e:'E',
        master:{
            r:'R'
        }
    },
    info:{
        price:'2000',
        gender:'female'
    }
}

let newRaven = {
    ...raven,
    info:{
        ...raven.info,
        price:'1000'
    }
}
// 暫時寫不出 object.assign() 的版本, 看 babel 好像有點難 哭哭 多層 spread operator


// false, 一個新物件
console.log(raven === newRaven)

// true, 因為是 shallow copy
console.log(raven.skills === newRaven.skills)

// true, shallow copy 
console.log(raven.skills.q === newRaven.skills.q)

// false, 有 copy 了 info 
console.log(raven.info === newRaven.info)

// false, 有 copy 了 info 
console.log(raven.info.price === newRaven.info.price)

// true, 有 copy 了 info, 但是沒有宣告要複製這個值 
console.log(raven.info.gender === newRaven.info.gender)

console.log(raven)
console.log(newRaven)