const settings = {
    colors: {
        background: 'darkblue'
    }
}

// The random seed
let seed

// Canvasses
let bg
let s

// The array of stars
let stars

function setup() {
    createCanvas(windowWidth, windowHeight)

    // Create random seed
    seed = random(-137, 137)

    // Set background
    bg = createGraphics(width, height)
    bg.background(0)
    bg.noStroke()
    let colorFrom = color(random()*150, random()*150, random()*150)
    let colorTo = color(random()*150, random()*150, random()*150)
    for (var x = 0; x < bg.width / 10; x++) {
        for (var y = 0; y < bg.height / 10; y++) {
            bg.fill(lerpColor(colorFrom, colorTo, x * 10 / width / 2))
            bg.rect(x * 10, y * 10, 10, 10)
        }
    }

    // Create stars
    s = createGraphics(width, height)
    s.translate(s.width/2, s.height/2)
    s.stroke(255)
    stars = []
    for (var i = 0; i < 500; i++) {
        stars.push(new Star())
    }
}

function draw() {
    // randomSeed(seed)

    // Draw the background
    image(bg, 0, 0)

    // Update and draw stars
    s.clear()
    for (var i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].draw()
    }

    // Draw star canvas
    image(s, 0, 0)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
