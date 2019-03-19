const settings = {
    colors: {
        background: '#f2f0d5',
        flower: '#ff5173',
        branch: '#3a1a0b',
        twig: '#37c654'
    }
}

var seed = 137

function setup() {
    // createCanvas(512, 512)
    createCanvas(windowWidth, windowHeight)
    noLoop()
    noStroke()
    angleMode(DEGREES)

    seed = random(-137, 137)
}

function draw() {
    randomSeed(seed)

    push()
    translate(width/2, height)

    background(settings.colors.background)
    var treeR = new Tree(0, 0, 7)
    treeR.draw()

    pop()

    // Noise
    // for (var x = 0; x < width/10; x++) {
    //     for (var y = 0; y < height/10; y++) {
    //         let posX = x * 10 + random(-5, 5)
    //         let posY = y * 10 + random(-5, 5)
    //         fill(settings.colors.background)
    //         fill('rgba(0, 0, 0, 0.005)')
    //         if (random() > 0.5) {
    //             fill('rgba(255, 255, 255, 0.005)')
    //         }
    //         ellipse(posX, posY, 40, 40)
    //     }
    // }
}

function mouseClicked() {
    seed = random(-137, 137)
    console.log('Seed', seed)
    redraw()
}
