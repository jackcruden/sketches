class Entity {
    dna
    calculatedFitness

    constructor(dna = []) {
        this.calculatedFitness = false

        // Set random DNA
        if (dna.length) {
            this.dna = dna
        } else {
            // For each character in DNA length
            for (let i = 0; i < settings.goal.length; i++) {
                // Get random character
                dna.push(settings.characters.charAt(Math.floor(Math.random() * settings.characters.length)))
            }
            this.dna = dna
        }
    }

    cross(entity) {
        // Initialise the child DNA
        let childDna = []

        // Get DNA from both
        let midpoint = Math.floor(Math.random() * this.dna.length)
        for (let i = 0; i < this.dna.length; i++) {
            if (i <= midpoint) {
                childDna.push(this.dna[i])
            } else {
                childDna.push(entity.dna[i])
            }
        }

        // Chance of mutation
        childDna = childDna.map(function (gene) {
            if (Math.random() <= settings.mutation_rate) {
                gene = settings.characters.charAt(Math.floor(Math.random() * settings.characters.length))
            }

            return gene
        })

        // Return the child
        return new Entity(childDna)
    }

    fitness(goal) {
        if (! this.calculatedFitness) {
            let fitness = 0
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] == goal.charAt(i)) fitness++
            }
            this.calculatedFitness = fitness
        }

        return this.calculatedFitness
    }
}
