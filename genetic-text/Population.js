class Population {
    entities

    constructor() {
        // Create population
        this.entities = []
        for (let i = 0; i < settings.population; i++) {
            this.entities.push(new Entity())
        }
    }

    step() {
        // Create a breeding pool
        let pool = []
        this.entities.forEach(function (entity) {
            for (let i = 0; i < entity.fitness(settings.goal); i++) {
                pool.push(entity)
            }
        })

        // Create new population with random pairings
        let population = []
        for (let i = 0; i < settings.population; i++) {
            let parent1 = pool[Math.floor(Math.random() * pool.length)]
            let parent2 = pool[Math.floor(Math.random() * pool.length)]
            population.push(parent1.cross(parent2))
        }

        this.entities = population
    }

    fittest() {
        let fittestFitness = 0
        let fittest = false

        this.entities.forEach(function (entity) {
            if (entity.fitness(settings.goal) > fittestFitness) {
                fittestFitness = entity.fitness(settings.goal)
                fittest = entity
            }
        })

        return fittest
    }

    toString() {
        let string = ""
        this.entities.forEach(function (entity, index) {
            string = string.concat(entity.dna.join('') + ' ')
        })
        return string
    }
}
