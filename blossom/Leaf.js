class Leaf {
    dead = false

    constructor(x, y, size, color) {
        this.x = x
        this.y = y
        this.size = size
        this.color = color
        this.speed = 0.5
    }

    draw() {
        // Check if dead
        if (this.y > height) {
            this.dead = true
            return
        }

        fill(this.color)
        ellipse(this.x, this.y, this.size)

        this.y = this.y + this.speed
        this.x = this.x + waveFalling
    }
}
