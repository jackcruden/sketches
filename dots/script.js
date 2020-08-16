const settings = {
    colors: {
    }
}

var angle = 0
var detail = 60

function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()
}

function draw() {
    background(120)

    var spacing = 30
    var noiseSpeed = 0.004
    var maxSize = 30

    for (var x = spacing; x < width-spacing; x += spacing) {
        for (var y = spacing; y < height-spacing; y += spacing) {
            var size = noise(x+frameCount*noiseSpeed, y+frameCount*noiseSpeed)
            fill(size, size*255, size*255)
            ellipse(x, y, size*maxSize)
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
