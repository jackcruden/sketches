const settings = {
    colors: {
    }
}

var angle = 0
var detail = 60

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)
    noStroke()
    rectMode(CENTER)
    // smooth()
    noLoop()
}

function draw() {
    background(200)

    pointLight(255, 255, 255, 0, 0, 0)

    fill(255)
    sphere(20)
    ambientMaterial(0)

    for (var i = 0; i < 100; i++) {
        fill(255-i*3)
        rotateY(angle * i / 1000)
        rotateZ(angle * i / 1000)
        rotateX(angle * i / 1000)
        torus(i*2, 1, detail, detail)
    }

    angle += 0.0001
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
