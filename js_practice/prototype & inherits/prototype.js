let F = function() {
    this.a = 1
    this.b = 2
}

F.prototype.b = 3
F.prototype.c = 5

let o = new F()



console.log(o.prototype)