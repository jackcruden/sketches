class Sushi {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        push()
        translate(this.x, this.y, 0)
        // scale(0.6)

        rotateY(frameCount * 0.01)
        rotateX(frameCount * 0.01)
        rotateZ(frameCount * 0.01)

        // Rice
        push()
        fill(255)
        box(100, 30, 50)
        pop()

        // Back topping
        push()
        translate(createVector(0, -25, -12.5))
        fill(200)
        // box(100, 20, 25)
        pop()

        // Front topping
        push()
        translate(createVector(0, -25, 12.5))
        fill(150)
        // box(100, 20, 25)
        pop()

        // Full topping
        push()
        translate(createVector(0, -25, 0))
        fill(settings.colors.salmon)
        box(100, 20, 50)
        pop()

        // Back seaweed
        push()
        translate(createVector(0, -10, -25.1))
        fill(settings.colors.seaweed)
        plane(30, 50)
        pop()

        // Front seaweed
        push()
        translate(createVector(0, -10, 25.1))
        fill(settings.colors.seaweed)
        plane(30, 50)
        pop()

        // Top seaweed
        push()
        translate(createVector(0, -35.1, 0))
        rotateX(TWO_PI/4)
        fill(settings.colors.seaweed)
        plane(30, 50)
        pop()

        // Bottom seaweed
        push()
        translate(createVector(0, 15.1, 0))
        rotateX(TWO_PI/4)
        fill(settings.colors.seaweed)
        plane(30, 50)
        pop()

        pop()
    }
}
