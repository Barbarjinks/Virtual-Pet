
const pet = new Pet('Eric');
const initialHunger = 0
const initialFitness = 10


function Pet(name) {
    this.name = name; 
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
    get isAlive () {
            const alive =  this.age < 30 && this.hunger < 10 && this.fitness > 0;
            if (alive) { return true }
            return false  
    },     

    growUp: function() {
        if (!this.isAlive) {
            throw new Error ('Your pet is no longer alive');
        }

        this.age += 1
        this.hunger += 5
        this.fitness -= 3
    },

    walk: function() {
        this.fitness += 4
    }
}

module.exports = Pet;