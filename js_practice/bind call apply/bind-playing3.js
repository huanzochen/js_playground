let me = {
    'name': 'tommy',
    'height': 178,
    getHeight: function() {
        console.log(` my name is ${this.name} , 
        my height is ${this.height},
        the person i am thinking about is ${arguments[0]}
        her height is ${arguments[1]}`)
    }
}

let meBinded = me.getHeight.bind(me, 'sandra')
meBinded('158')

function othersAboutMe () {
    let region = 'Hsinbei'
    return `I am ${this.name}, I live in ${region}`
}

/** 以下方式是不可行的 因為 arrow function 沒有自己的 this 和 arguments
 * https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions 
let othersAboutMe = () => {
    let region = 'Hsinbei'
    return `I am ${this.name}, I live in ${region}`
}
*/

let othersAboutMeBinded = othersAboutMe.bind(me)

console.log(othersAboutMeBinded())



















