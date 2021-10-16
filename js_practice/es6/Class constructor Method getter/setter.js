const language = {
    set current(name) {
        this.log.push(name)
    },
    log:[]
}


language.current = 'EN'
language.current = 'FA'

console.log(language.log)


class Language {
    constructor() {
        this.log = []
    }
    set setLang(name) {
        this.log.push(name)
    }
}

const aaa = new Language()

aaa.setLang = 'TC'
aaa.setLang = 'CC'

console.log(aaa.log)
