class Polygon {
    constructor(...sides) {
        this.sides = sides
    }

    // method
    *getSides() {
        for (const side of this.sides) {
            yield side
        }
    }
}

const pentagon = new Polygon(1, 2, 3, 4, 5)

console.log([...pentagon.getSides()])
