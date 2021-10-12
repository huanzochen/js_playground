// ref:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/function*

function* generator(i) {
    yield i
    yield i + 10
}

const gen = generator(10)

console.log(gen.next().value)