let person = [{
    firstName: 'Bob',
    lastName: 'Loblaw',
    address: {
        street: '123 Fake St',
        city: 'Emberton',
        state: 'NJ'
    }
}]
function giveAwesomePowers(person) {
    person.specialpower = 'invisibility'
    return person
}
function giveNewAddress(person) {
    person[0].address.city = 'taiwan'
}

// 來看看原本的 person 長怎樣
console.log(person)

// 複製一個 anotherPerson  並且幫她在陣列增加一個元素, 和在 object 裡增加一個元素
let anotherPerson = person.slice()
giveAwesomePowers(anotherPerson)
giveNewAddress(anotherPerson)

// 結果發現 anotherPerson 陣列中的值有被加上, person 沒有被影響.
// 但在 object 中, person 的 address 卻同樣被改變了, 證明在 shallow copy 下, 內層 object 
// 一樣是會被 mutable 的
console.log(person)
console.log(anotherPerson)