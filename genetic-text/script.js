const settings = {
    goal: "Welcome to jack.kiwi!",
    characters: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz .,!'s",
    population: 300,
    mutation_rate: 0.01
}

var font
var population
var generation = 0

function preload() {
    font = loadFont('Courier.otf');
}

function setup() {
    console.log('setup()')

    createCanvas(windowWidth, windowHeight)

    population = new Population(settings.population)

    textFont('Courier', 20)

    console.log('setup() finished')
}

function draw() {
    console.log('draw()')

    background(255)

    // Draw all background text
    textSize(20)
    fill(0)
    text(population.toString(), 0, 0, width + 500, height + 20)

    // Draw the best one
    let fittest = population.fittest().dna.join('')
    let box = font.textBounds(fittest, 100, 120, 50)
    fill(0)
    let x = box.x - 20
    let y = box.y - 20
    let w = box.w + 40
    let h = box.h + 40
    rect((windowWidth/2) - ((x+w)/2) + 40, (windowHeight/2) - ((y+h)/2), w, h)
    fill(255)
    textSize(50)
    text(fittest, (windowWidth/2) - ((x+w)/2) + 60, (windowHeight/2) - ((y+h)/2) + 50)

    // Draw the stats
    // fill(0)
    // rect(82, 141, 100, 100)
    // fill(255)
    // textSize(16)
    // text("Yowsa", 100, 150)

    // Check if finished
    if (fittest == settings.goal) {
        noLoop()
        console.log('Generation: ' + generation)
    }

    population.step()
    generation++
}
