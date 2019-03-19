class Tree {
    constructor(x, y, depth) {
        this.x = x
        this.y = y
        this.depth = depth
        this.length = height / 50 * depth
    }

    draw() {
        let angle = 0 // = mouseY
        push()

        // Branch color
        fill(settings.colors.branch)
        if (this.depth < 3) {
            fill(settings.colors.twig)
        }

        // Branch
        rect(0-this.depth/2, 0, this.depth, this.y-this.length)
        ellipse(0, 0, this.depth)
        fill('rgba(100, 50, 0, 1)')
        // for (var i = 0; i < 400; i++) {
        //     ellipse(
        //         random(-this.depth/3, this.depth/3),
        //         random(0, this.y-this.length),
        //         random(this.depth/2, this.depth),
        //         random(0, this.depth*3)
        //     )
        // }

        // Translate
        translate(0, -this.length)

        if (this.depth > 0) {
            if (random() > 0.2) {
                push()
                rotate(angle*2 + random(-50, 50))
                var child = new Tree(0, 0, this.depth-1)
                child.draw()
                pop()
            }

            if (random() > 0.2) {
                // Left
                push()
                rotate(-angle-angle  + random(-50, 50))
                var child = new Tree(0, 0, this.depth-1)
                child.draw()
                pop()
            }
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
                    this.x + random(-this.depth*2, this.depth*2),
                    this.y-this.length + random(-this.depth, this.depth),
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

        pop()
    }
}
