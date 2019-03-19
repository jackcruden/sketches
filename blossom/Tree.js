class Tree {
    constructor(x, y, depth) {
        this.x = x
        this.y = y
        this.depth = depth
        this.length = height / 50 * depth
        this.leaves = []
        this.leafInterval = Math.round(random(200, 10000))
        this.childL = null
        this.childR = null

        if (this.depth > 0) {
            if (random() > 0.2) {
                push()
                rotate(angle + random(-50, 50))
                this.childL = new Tree(0, 0, this.depth-1)
                pop()
            }

            if (random() > 0.2) {
                // Left
                push()
                rotate(angle/2 + random(-50, 50))
                this.childR = new Tree(0, 0, this.depth-1)
                pop()
            }
        }
    }

    draw() {
        push()

        // Branch
        fill(settings.colors.branch)
        if (this.depth < 3) {
            fill(settings.colors.twig)
        }
        rect(0-this.depth/2, 0, this.depth, this.y-this.length)
        ellipse(0, 0, this.depth)
        fill('rgba(100, 50, 0, 1)')

        // Translate
        translate(0, -this.length)

        if (this.childL) {
            push()
            rotate(angle + random(-50, 50))
            this.childL.draw()
            pop()
        }
        if (this.childR) {
            push()
            rotate(angle/2 + random(-50, 50))
            this.childR.draw()
            pop()
        }

        // Flower
        fill(settings.colors.flower)
        fill('rgba(240, 20, 0, 0.5)')
        if (random() > 0.5) {
            fill('rgba(240, 20, 50, 0.5)')
        }
        var flowerChance = 10 - this.depth
        if (random(flowerChance) > 3) {
            for (var j = 0; j < random(0, 3); j++) {
                ellipse(
                    this.x + random(-this.depth*2+wave*5, this.depth*2),
                    this.y-this.length + random(-this.depth+wave*5, this.depth),
                    this.depth*flowerChance
                )
            }
        }

        // Seeds
        fill(settings.colors.flower)
        fill('rgba(255, 255, 255, 0.8)')
        var flowerChance = 10 - this.depth
        if (random(flowerChance) > 3) {
            for (var j = 0; j < 3; j++) {
                ellipse(
                    this.x + random(-10, 10),
                    this.y-this.length + random(-10, 10),
                    5
                )
            }
        }

        // Falling leaves
        if (this.depth == 1 && frameCount % this.leafInterval == 0) {
            this.leaves.push(new Leaf(
                this.x + this.depth,
                this.y - this.length,
                5,
                255
            ))
        }
        for (var k = this.leaves.length; k > 0; k--) {
            this.leaves[k-1].draw()

            if (this.leaves[k-1].dead) {
                this.leaves.splice(k-1, 1)
            }
        }

        pop()
    }
}
