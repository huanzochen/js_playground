import { produce } from "immer";

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

const nextRaven = produce(raven, draftRaven => {
    draftRaven.skills.q  = 'QQ'
})

// false 因為 immer 的關係 nextRaven 會變成一個新 object
console.log(raven === nextRaven)
// false
console.log(raven.skills === nextRaven.skills)
// true
console.log(raven.skills.master.r === nextRaven.skills.master.r)
// false
console.log(raven.skills.q === nextRaven.skills.q)
// true
console.log(raven.info === nextRaven.info)

// 根據這個結果我會認為 immer 可以避免被更改的東西, 會被 reference.
// 但其他不會被更改的東西, 基本上不會更動, 其實就是讓你少寫了 spread operators

// raven
console.log(raven)
// nextRaven
console.log(nextRaven)