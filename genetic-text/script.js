const settings = {
    colors: {
        background: '#edeac7',
        flower: '#ff5173',
        branch: '#3a1a0b',
        twig: '#37c654'
    }
}

var wave = 0
var waveFalling = 0
var seed = 137
var angle = 0
var tree

function setup() {
    // createCanvas(512, 512)
    createCanvas(windowWidth, windowHeight)
    // noLoop()
    noStroke()
    angleMode(DEGREES)

    seed = random(-137, 137)
    tree = new Tree(0, 0, 7)
}

function draw() {
    angle = wave * 4
    randomSeed(seed)
    wave = sin(frameCount / 2)
    waveFalling = sin(frameCount)

    push()
    translate(width/2, height)

    background(settings.colors.background)

    tree.draw()

    pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function mouseClicked() {

}

function touchStarted() {
    seed = random(-137, 137)
    console.log('Seed', seed)
    redraw()
}
