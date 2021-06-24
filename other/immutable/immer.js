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
// false
console.log(raven.skills.master.r === nextRaven.skills.master.r)
// false
console.log(raven.skills.q === nextRaven.skills.q)
// false
console.log(raven.info === nextRaven.info)

// raven
console.log(raven)
// nextRaven
console.log(nextRaven)