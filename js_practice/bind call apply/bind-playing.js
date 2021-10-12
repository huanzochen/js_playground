const city = {
    favorite: 'taiwan',
    english: 'USA',
    xi: 'China',

    getCity: function() {
        return `my favorite city is ${this.favorite}`
    },

    // getter get 語法會將物件屬性，綁定到屬性被檢索時，所呼叫的函式。
    get getCityGetterType () {
        return `my favority city is ${this.favorite}, and this is made by getter function`
    }

}

let tommy = city.getCity
// the function get invoked at the global scope
// console.log(tommy()) // cannot read property 'favorite' of undefined

// 這兩者的答案會是相同的
let tommyBinded = tommy.bind(city)
console.log(tommyBinded())
let tommyBinded2 = city.getCity.bind(city)
console.log(tommyBinded2())

// 嘗試使用 getter 設立的 function
let tommy2 = city.getCityGetterType
// 直接使用 getter 設立的 function 就可以直接拿到 this 的值
console.log(tommy2)


let kevin = city
// 直接繼承整個物件的話就不會有上述沒有 city中變數的問題
// 因為同時也繼承了this 中的所有值
console.log(kevin.getCity())


function Animal (name, type, gender) {
    this.name = name
    this.type = type
    this.gender = gender
}

Animal.prototype.speak = function() {
    return `${this.name}'s ${this.type} is a ${this.gender} `
}

Animal.genders = function(a, b) {
    return `one of the gender is ${a.gender}, another is ${b.gender}`
}

// 寫一個 new city 物件

let sandra = new Animal('Tommy', 'mouse', 'girl')
let tzuchuan = new Animal('Sandra', 'fat', 'boy')
console.log(sandra.speak())
console.log(tzuchuan.speak())
console.log(Animal.genders(sandra, tzuchuan))


