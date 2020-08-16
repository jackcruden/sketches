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
var tree1
var tree2
var tree3

function setup() {
    // createCanvas(512, 512)
    createCanvas(windowWidth, windowHeight)
    // createCanvas(400, 500)
    angleMode(DEGREES)

    seed = random(-137, 137)
    tree1 = new Tree(0, 0, 8, 20)
    // tree2 = new Tree(0, 0, 7)
    // tree3 = new Tree(0, 0, 7)
}

function draw() {
    angle = wave * 4
    randomSeed(seed)
    wave = sin(frameCount / 2)
    waveFalling = sin(frameCount)

    push()
    translate(width/2, height)

    background(settings.colors.background)
    drawText(4/6, getWords(2))
    tree1.draw()
    drawText(3/6, getWords(1))
    drawText(2/6, getWords(0))

    pop()
}

function drawText(line, value) {
    textFont('Avenir')
    textSize(80)
    textStyle(BOLD)
    textAlign(CENTER, CENTER)
    fill(255)
    strokeWeight(8)
    stroke('rgba(0, 0, 0, 0.1)')
    text(value, 0, map(line, 0, 1, -height, 0))
}

function getWords(index) {
    let words = document.getElementsByName('text')[0].value.split(' ')
    return index < words.length ? words[index] : ''
}

function mouseClicked() {

}

function touchStarted() {
    seed = random(-137, 137)
    console.log('Seed', seed)
    redraw()
}
