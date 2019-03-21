class Star {
    constructor() {
        this.x = random(-s.width/2, s.width/2)
        this.y = random(-s.height/2, s.height/2)
        this.z = random(s.width)
        this.speed = random(0.5, 10)
    }

    update() {
        // Reset if dead
        if (this.z <= 0) {
            this.z = s.width
            this.x = random(-s.width/2, s.width/2)
            this.y = random(-s.height/2, s.height/2)
        }

        this.z += -this.speed
    }

    draw() {
        var oldX = map(this.x / (this.z + this.speed * 5), 0, 1, 0, width)
        var oldY = map(this.y / (this.z + this.speed * 5), 0, 1, 0, height)
        var newX = map(this.x / this.z, 0, 1, 0, width)
        var newY = map(this.y / this.z, 0, 1, 0, height)

        // Reset if star has just 'died'
        if (this.z < 0) {
            oldX = newX
            oldY = newY
        }

        // Set size
        var size = map(this.z, width, 0, 0, 2)
        s.strokeWeight(size)

        s.line(oldX, oldY, newX, newY)
    }
}
