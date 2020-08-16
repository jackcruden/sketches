const settings = {
    colors: {
        background: '#66ffd8',
        salmon: 'salmon',
        seaweed: 'seagreen'
    }
}

// All the sushi
var sushi = []

function setup() {
    pixelDensity(4)
    createCanvas(windowWidth, windowHeight, WEBGL)
    // smooth()
    noStroke()

    ortho()
    angleMode(DEGREES)

    var count = 5
    var spaceX = width / (count + 1)
    var spaceY = height / (count + 1)
    for (var x = spaceX; x < width; x += spaceX) {
        for (var y = spaceY; y < height; y += spaceY) {
            sushi.push(new Sushi(x - width/2, y - height/2))
        }
    }
}

function draw() {
    background(settings.colors.background)
    orbitControl()

    for (var s = 0; s < sushi.length; s++) {
        sushi[s].draw()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
